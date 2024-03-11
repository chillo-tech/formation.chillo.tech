import { LogoSizes } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ size = "medium" }: { size?: keyof typeof LogoSizes }) => {
  return (
    <div>
      <Link href="/">
        <Image
          loading="lazy"
          src="/images/chillo-services.webp"
          alt="formation-chillo.tech"
          {...LogoSizes[size]}
        />
      </Link>
    </div>
  );
};

export { Logo };
