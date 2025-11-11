import React, { Children } from "react";

export default function layou ({children}:{children: React.ReactNode}){
    return(
        <html>
            <body>
                <hr />
                {children}
                <hr />
            </body>
        </html>
    );
}