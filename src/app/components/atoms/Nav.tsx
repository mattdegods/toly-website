"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav: FC = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-gray-900 border-b border-gray-800 max-w-[1600px] mx-auto">
      <div className="flex items-center gap-2">
        <Image
          src="/images/toly-img.png"
          width={40}
          height={40}
          alt="toly coin image"
        />
        <p className="font-semibold text-xl">$TOLY COIN</p>
      </div>
      <nav className="space-x-4">
        <Link className="hover:underline" href="#">
          Whitepaper
        </Link>
        <Link className="hover:underline" href="#">
          Team
        </Link>
        <Link className="hover:underline" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
