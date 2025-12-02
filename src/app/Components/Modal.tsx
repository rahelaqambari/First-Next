"use client";

import { useRouter } from "next/router";
import React, { MouseEventHandler, useCallback, useEffect, useRef } from "react";

export default function Modal({children}:{children:React.ReactNode}){
    const overlay = useRef(null);
    const wrapper = useRef (null);
    const router = useRouter();

    const onDismiss = useCallback(()=>{
        router.back();
    },[router]);

    const onclick: MouseEventHandler = useCallback(
        (e)=>{
            if(e.target === overlay.current || e.target ===wrapper.current){
                if (onDismiss) onDismiss();
            }
        }, [onDismiss, overlay ,wrapper]
    );

    const onKeydown = useCallback(
        (e:KeyboardEvent)=>{
            if (e.key === "Escape") onDismiss();
        },[onDismiss]
    );

    useEffect(()=>{
        document.addEventListener("keydown",onKeydown);
        return()=>document.removeEventListener("keydown",onKeydown);
    },[onkeydown]);

    return(
        <div ref={overlay} className="fixed z-10 left-0 top-0 bottom-0 right-0 mx-auto bg-black/65 p-12"
        onClick={onclick}
        >
            <div ref={wrapper} className="absolute top-1/2 left-1/2 -translate-y-1/2 sm:w-1/2 md:w-8/12">
            {children}
            </div>
        </div>
    )
}
