/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Subtitle, Paragraph } from "@/components/Text";
import Header from "../../header";
const inter = Inter({ subsets: ["latin"] });
import { ExtraContent } from "./extra-content";
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",

  openGraph: {
    type: "website",
    url: "https://scintilla.network",
    title: "Scintilla: Modular and Scalable Peer-to-Peer Protocol",
    description:
      "Present the Scintilla protocol, its architecture and its base components and how it aims at providing a universal protocol for asset transfer and exchange",
    siteName: "Scintilla",
  },
  title: "Scintilla: Modular and Scalable Peer-to-Peer Protocol",
  description:
    "Present the Scintilla protocol, its architecture and its base components and how it aims at providing a universal protocol for asset transfer and exchange",
};

const Content = () => {
  return (
    <>
      <section className="dark mx-auto flex flex-col items-center border-t-[2px] border-gray-800 bg-gray-950 px-[15px] py-[70px] lg:py-[120px]">
        <div className="h-[15px]"></div>
        <div
          className="max-w-[800px] text-center text-4xl font-extrabold leading-tight md:text-5xl"
          style={{
            color: "#ccd9f0",
          }}
        >
          <h2 className="">Introducing Bifrost: Bridging Stellar and Beyond</h2>
        </div>
        <div className="h-[100px]"></div>
        <div className="prose max-w-screen-sm text-xl leading-relaxed dark:prose-invert">
          <Subtitle>
            We're thrilled to announce Bifrost, our latest project supported by{" "}
            <a
              href="https://communityfund.stellar.org/"
              className="font-extrabold"
              color="white"
            >
              The Stellar Community Fund.{" "}
            </a>
          </Subtitle>

          <Paragraph>
            1. <b className="font-extrabold">What is Bifrost?</b> <br />
            Combining the best of both worlds - decentralized robustness with
            modular flexibility. <br />
          </Paragraph>
          <Paragraph>
            2. <b className="font-extrabold">Why Scintilla?</b>
            <br />
            Scintilla is a platform tailored for real-world assets. It's
            designed for swift transfers at almost zero fees. So, by connecting
            Stellar to Scintilla, we're giving the Stellar Community a chance to
            play in a much larger field. <br />
          </Paragraph>
          <Paragraph>
            3. <b className="font-extrabold">Key Features of Bifrost: </b>{" "}
            <ul
              style={{
                marginLeft: "20px",
              }}
            >
              <li>
                <b className="font-extrabold">Open Interchain Bridge: </b>We're
                not just connecting Stellar to Scintilla. We're also bridging it
                to Bitcoin, Ethereum, Cosmos, and many more. And guess what?
                It's super secure!
              </li>{" "}
              <li>
                <b className="font-extrabold">Value for Stellar Users: </b>
                Imagine being able to exchange your Stellar assets with
                thousands of real-world assets. That's what Bifrost offers.
              </li>{" "}
              <li>
                <b className="font-extrabold">Safety First: </b> With a
                trustless bridge and a validator quorum system, your funds are
                in safe hands.
              </li>{" "}
              <li>
                <b className="font-extrabold"> Legal Support: </b> Scintilla
                guides businesses in tokenizing assets, and they even provide
                legal support, all paid for by the chain's DAO budget.
              </li>{" "}
              <li>
                <b className="font-extrabold">Advanced Security: </b> Our system
                uses both Proof of Work and Proof of Stake to verify
                transactions. That means it's fast, secure, and efficient.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            4. <b className="font-extrabold">User Experience: </b>
            <ul
              style={{
                marginLeft: "20px",
              }}
            >
              <li>
                <b className="font-extrabold">Simple Currency System: </b> All
                assets are paired with USDC, a stablecoin pegged to the US
                dollar, which is globally recognized. With Stellar, transactions
                involving USDC are almost instantaneous and virtually free.
              </li>
              <li>
                <b className="font-extrabold">Built for Everyone: </b> Whether
                you're a newbie, a developer, or a partner, our project is
                designed for you. From mobile and web apps to developer tools,
                we've got you covered. Plus, developers can expand their
                projects using our SDK.
              </li>
            </ul>
          </Paragraph>
          <p>
            In essence, Bifrost is set to revolutionize how you interact with
            Stellar and real-world assets. Stay tuned for more updates!
          </p>
        </div>
        <div className="h-[100px]"></div>
        <div className="m-auto max-w-screen-xl gap-[12px] md:columns-2 xl:columns-3"></div>
        <ExtraContent />
      </section>
    </>
  );
};
export default function BlogLayout() {
  return (
    <div className="min-h-[100vh] bg-gray-50 dark:bg-gray-900">
      <Content />
    </div>
  );
}
