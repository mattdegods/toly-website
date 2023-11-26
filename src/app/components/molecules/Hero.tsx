"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/app/configs/framer.config";

const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-20 px-5 text-center">
      <Image
        src="/images/toly-img.png"
        width={250}
        height={250}
        alt="toly coin image"
        priority
      />
      <h1 className="text-[70px] md:text-[90px] leading-[88px] font-bold">
        $TOLY COIN
      </h1>
      <p>Launched in May 2023</p>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        &quot;FUCK A ROLY, BUY SOME $TOLY&quot;
      </p>
      <motion.button
        className="border-4 border-black mt-8 px-5 py-2 bg-gradient-to-br from-solana-green to-solana-purple text-white rounded-lg"
        {...smallClickAnimation}
        onClick={() =>
          window.open(
            "https://jup.ag/swap/SOL-TOLY",
            "_blank",
            "noreferrer noopener"
          )
        }
      >
        Buy on Jupiter
      </motion.button>
    </section>
  );
};

export default Hero;
