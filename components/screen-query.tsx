"use client";

import React from "react";
import {useMediaQuery} from "usehooks-ts";

const MOBILE_MAX_WIDTH = 512;
const DESKTOP_MIN_WIDTH = 513;

interface ViewProps {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
}

const MobileView = ({children, fallback}: ViewProps) => {
    const isMobile = useMediaQuery("(max-width: 512px)");

    if (!isMobile) return fallback ?? null;

    return <>{children}</>;
}

const DesktopView = ({children, fallback}: ViewProps) => {
    const isDesktop = useMediaQuery("(min-width: 780px)");

    if (!isDesktop) return fallback ?? null;

    return <>{children}</>;
}


export {MobileView, DesktopView, MOBILE_MAX_WIDTH, DESKTOP_MIN_WIDTH};