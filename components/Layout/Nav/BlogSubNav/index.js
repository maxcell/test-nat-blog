import React from "react";
import Link from "next/link";

function MainNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/blog/posts">All Posts</Link>
          </li>
          <li>
            <Link href="/blog/posts/featured-posts">Featured Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
