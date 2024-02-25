"use client";
import React from "react";
import { Footer, Navbar } from "../containers";
import { ApplicationWrapper, QueryWrapper } from "@/context";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryWrapper>
      <ApplicationWrapper>
        <Navbar />
        {children}
        <Footer />
      </ApplicationWrapper>
    </QueryWrapper>
  );
};

export { HomeLayout };
