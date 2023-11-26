"use server";

import Nav from "./components/atoms/Nav";
import Hero from "./components/molecules/Hero";
import Section from "./components/atoms/Section";
import Link from "next/link";
import { Twitter } from "lucide-react";
import Telegram from "./components/@icons/Telegram";

export default async function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="w-full fixed top-0 bg-gray-800">
        <Nav />
      </div>
      <main className="flex-1">
        <Hero />
        <Section title="Origin Story" id="origin" image="/images/branding3.jpg">
          <p>
            $TOLY was born out of a conversation between two friends who have
            been in the Solana ecosystem for a few years now. Around the time, a
            few tokens were launched, but none had fully decentralized
            distribution. As an experiment and a point of curiosity in exploring
            the token program library, the two friends created and launched
            $TOLY. They self-seeded the LP, immediately burned the LP tokens,
            and revoked mint authority.
            <br />
            <br />
            From the onset, $TOLY was meant for the people to honor the founder
            of Solana,{" "}
            <code className="bg-gray-600">
              <a
                href="https://twitter.com/aeyakovenko"
                target="_blank"
                rel="noreferrer noopener"
              >
                Anatoly Yakovenko
              </a>
            </code>
            .
          </p>
        </Section>
        <Section
          title="Hard Facts"
          id="facts"
          image="/images/branding7.jpg"
          reverse
        >
          <div className="w-full flex flex-col space-y-4 text-justify">
            <p>
              The developers own zero supply of $TOLY. This was launched as an
              experiment by the devs.
            </p>
            <p>
              The developers have very little to no involvement in $TOLY&apos;s
              direction. It is now entirely community-run, with a few members
              rising to drive the direction.
            </p>
            <p>
              $TOLY coin was the first TOLY-native SPL launched. The developers
              were able to grind the custom token address{" "}
              <code className="bg-gray-600 text-xs">
                <a
                  href="https://explorer.solana.com/address/to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK
                </a>
              </code>{" "}
              to pay homeage to Anatoly.
            </p>
            <p>
              Anatoly himself has no affiliation with $TOLY coin. The entire
              progress, marketing, and community managment of TOLY is funded by
              the community itself.
            </p>
          </div>
        </Section>
        <Section
          title="$TOLY Tokenomics"
          id="tokenomics"
          image="/images/branding2.jpg"
        >
          <div className="flex flex-col space-y-4 text-justify">
            <p>Total supply: 500,000,000</p>
            <p>Fair Launched: 250,000,000</p>
            <p>Airdropped: 150,000,000</p>
            <p>
              100,000,000 $TOLY was attempted to be burned on [DATE HERE].
              However, the main developer made a mistake and accidentally sent
              it to trash.sol. That led to a short-term sell-off. Today, $TOLY
              is now fully distributed and decentralized with little wallet
              concentration. The founding developers did not and do not hold
              $TOLY.
            </p>
          </div>
        </Section>
      </main>
      <footer className="w-full max-w-[1600px] mx-auto p-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
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
        </div>
        <p className="text-sm">© $TOLY</p>
      </footer>
    </div>
  );
}
