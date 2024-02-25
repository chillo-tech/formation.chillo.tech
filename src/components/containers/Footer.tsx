import { FooterIcons, footerSocialLinks, footerTopItems } from "@/data";
import Link from "next/link";
import React from "react";
import { Logo } from "..";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto ">
        <div className="flex md:flex-row flex-col gap-10 md:gap-7 sm:gap-10">
          {footerTopItems.map((item, index) => {
            return (
              <div
                key={`footer-items-${index}`}
                className="flex flex-col gap-3 justify-items-start max-w-[300px]"
              >
                <h5 className="h-[40px] font-bold text-xl">
                  {item.title?.toUpperCase()}
                </h5>
                <ul className="list-none flex flex-col gap-3 justify-items-start">
                  {item.items.map((subItem, subIndex) => {
                    return (
                      <li key={`footer-subItem-${index}-${subIndex}`}>
                        {typeof subItem === "string" ? (
                          subItem
                        ) : (
                          <Link href={subItem.path}>{subItem.label}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between my-4">
          <Logo size="medium" />
          <div className="flex gap-4 items-center">
            {footerSocialLinks.map((link, index) => {
              return (
                <Link href={link.path} key={`footer-social-links-${index}`}>
                  {FooterIcons[link.icon]}
                </Link>
              );
            })}
          </div>
        </div>
        <p className="flex gap-8 items-center my-1">
          <span>©Copyright 2024</span>
          <span>Worldwide101 Inc.</span>
          <span>dba Boldly Premium Subscription Staffing</span>
        </p>
        <p className="flex justify-end gap-8 my-1">
          <span>Confidentialité</span>
          <span>Termes</span>
          <span>Se connecter</span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
