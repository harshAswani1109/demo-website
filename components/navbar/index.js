import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <h1>Hi im a Navbar</h1>
      <div className="flex gap-4">
        <Link href="/team">Team</Link>
        <Link href="/vision">vision</Link>
        <Link href="/sponsors">sponsors</Link>
        <Link href="/career">career</Link>
        <Link href="/about">about</Link>
      </div>
    </div>
  );
};

export default Navbar;
