import React from "react";
import { useRouter } from "next/router";
import { MainNav, BlogSubNav } from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  const showBlogSubNav = useRouter().pathname.includes("blog");
  return (
    <>
      <MainNav />
      {showBlogSubNav && <BlogSubNav />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
