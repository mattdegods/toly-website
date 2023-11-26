import dynamic from "next/dynamic";

// @icons
const Telegram = dynamic(() => import("./@icons/Telegram"));

// atoms
const Nav = dynamic(() => import("./atoms/Nav"));
const Section = dynamic(() => import("./atoms/Section"));

// molecules
const Hero = dynamic(() => import("./molecules/Hero"));

export { Telegram, Nav, Section, Hero };
