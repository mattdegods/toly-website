"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";
import Telegram from "../@icons/Telegram";

const Nav: FC = () => {
  return (
    <header className="w-full p-5 flex justify-between items-center max-w-[1600px] mx-auto">
      <div className="flex items-center gap-2">
        <Image
          src="/images/toly-img.png"
          width={40}
          height={40}
          alt="toly coin image"
        />
        <p className="font-semibold text-xl">$TOLY COIN</p>
      </div>
      <nav className="flex items-center gap-5">
        <Link
          href="https://twitter.com/tolycoin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter size={20} color="white" fill="white" />
        </Link>
        <Link
          href="https://t.me/tolycoin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Telegram width={20} height={20} color="white" fill="white" />
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
