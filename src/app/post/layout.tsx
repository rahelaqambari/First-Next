import { Metadata } from "next";
import React, { Children } from "react";
export const metadata: Metadata = {
    title{
        absoulate: "post",
    }
}

export default function layou ({children}:{children: React.ReactNode}){
    return(
        <html>
            <body>
                <hr  />
                {children}
                <hr />
            </body>
        </html>
    );
}