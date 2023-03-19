import Head from "next/head";
import { PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  title?: string;
}

const origin = (typeof window !== "undefined" && window.location.origin) || "";

export const Layout = ({ children, title }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"} </title>
        <meta name="author" content="Luciana Ayala" />
        <meta name="description" content={`Info sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This is a page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner-pkm.png`} />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
