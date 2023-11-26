"use server";

import Nav from "./components/atoms/Nav";
import Hero from "./components/molecules/Hero";
import Section from "./components/atoms/Section";

export default async function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Section title="Origin" id="origin" image="/images/branding3.jpg">
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
        <Section title="Facts" id="facts" image="/images/branding7.jpg" reverse>
          <ol className="max-w-4xl mx-auto space-y-4 text-justify">
            <li key={1}>
              The developers own zero supply of TOLY. This was launched as an
              experiment by the devs.
            </li>
            <li key={2}>
              The developers have very little to no involvement in TOLY&apos;s
              direction. It is now entirely community-run, with a few members
              rising to drive the direction.
            </li>
            <li key={3}>
              $TOLYcoin was the first TOLY native SPL launched. The developers
              were able to mine the custom token address{" "}
              <code className="bg-gray-600">
                <a
                  href="https://explorer.solana.com/address/to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK
                </a>
              </code>{" "}
              to pay homeage to Anatoly.
            </li>
            <li key={4}>
              Anatoly himself has no affiliation with TOLY coin. The entire
              progress, marketing, and community managment of TOLY is funded by
              the community itself.
            </li>
          </ol>
        </Section>
        <Section
          title="Tokenomics"
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
      <footer className="px-10 lg:px-0 py-2 flex justify-center items-center border-t border-gray-800">
        <p className="text-sm">© TOLY</p>
      </footer>
    </div>
  );
}
