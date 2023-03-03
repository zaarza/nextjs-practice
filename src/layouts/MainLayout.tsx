import React, { ReactElement } from "react";
import { Navbar } from "@/components";
import Head from "next/head";

interface MainLayoutProps {
  children: any;
  title: string;
}

const MainLayout = ({ title, children }: MainLayoutProps) => {
  <Head>
    <title>{title}</title>
  </Head>;
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
