import type {Metadata} from "next";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter"
import {StyledRoot} from "@/providers/mui/styledRoot";
import "./globals.css";
import React from "react";
import StoreProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
    title: "Tech Trend ",
    description: "KigLance Tech Trend Challenge",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        <AppRouterCacheProvider>
            <StyledRoot>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </StyledRoot>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
