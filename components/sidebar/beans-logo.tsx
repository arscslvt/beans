import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/logo/icon.svg";
import React from "react";

export default async function BeansLogo() {
    return (
        <Link href={"/"} className={"hover:scale-105 active:scale-95 transition-transform"}>
            <Image src={Logo} alt={"Beans Logo"} width={28} height={28} className={"pointer-events-none"} priority/>
        </Link>
    );
}