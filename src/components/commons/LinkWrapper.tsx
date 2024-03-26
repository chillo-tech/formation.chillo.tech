import Link from "next/link";
import React from "react";

const LinkWrapper = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return href ? (
    <Link href={href} className="shrink-0">
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};

export { LinkWrapper };
