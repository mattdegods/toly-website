"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";
import { Telegram } from "@/app/components";
import { getPrice } from "@/app/lib/price";

const Nav: FC = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCurrentPrice = async () => {
      const price = await getPrice(
        "to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK"
      );
      setPrice(price);
    };
    getCurrentPrice();
  }, []);

  return (
    <header className="w-full p-5 flex justify-between items-center max-w-[1600px] mx-auto">
      <div className="flex items-center gap-2">
        <Image
          src="/images/toly-img.png"
          width={40}
          height={40}
          alt="toly coin image"
        />
        <p className="font-base-b text-xl">$TOLY</p>
        <p className="text-solana-green animate-pulse font-bold">{`$${price.toFixed(
          7
        )}`}</p>
      </div>
      <nav className="flex items-center gap-5">
        <Link
          href="https://twitter.com/tolycoin"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80"
        >
          <Twitter size={20} color="white" fill="white" />
        </Link>
        <Link
          href="https://t.me/tolycoin"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:opacity-80"
        >
          <Telegram width={20} height={20} color="white" fill="white" />
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
