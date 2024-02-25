import { LogoSizes } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ size = "small" }: { size?: keyof typeof LogoSizes }) => {
  return (
    <div>
      <Link href="/">
        <Image
          loading="lazy"
          src="/images/logo.png"
          alt="formation-chillo.tech"
          {...LogoSizes[size]}
        />
      </Link>
    </div>
  );
};

export { Logo };
