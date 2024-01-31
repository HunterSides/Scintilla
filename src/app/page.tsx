"use client";
// @ts-nocheck
import "./MainContent.css";
import Blink from "./blink";
import Link from "next/link";

const MainContent = () => {
  Blink();
  return (
    <div>
      <div className="dark flex w-full flex-row items-center justify-center bg-gray-900 px-[var(--horizontal-padding)] pb-[5rem] pt-[5rem] text-gray-800 md:pb-[8rem] md:pt-[6rem]">
        <main className="main-container">
          <div className="content-div">
            <Link className="content-text" href="/blog/Bifrost-v1.0.0">
              Discover Bifrost: →
            </Link>

            <div className="spacer-18px"></div>
            <h1 className="content-header">
              Scintilla is{" "}
              <span
                className="typer"
                style={{
                  color: "#ccd9f0",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "1px #ccd9f0",
                }}
                id="typer"
              ></span>
              <span className="blink" style={{ visibility: "visible" }}>
                |
              </span>
            </h1>
            <div className="spacer-8px"></div>
            <div className="h-8"></div>
            <p className="content-description">
              Centralized asset management has its flaws. We offer a fast,
              decentralized network solution. By leveraging sharding, tasks are
              spread across expandable node clusters. Our unified architecture
              ensures security, quick transactions, and easy integration of new
              services.
            </p>
            <div className="spacer-8px lg-hidden"></div>
          </div>
        </main>
      </div>
      <section className="dark mx-auto flex flex-col items-center border-t-[2px] border-gray-800 bg-gray-950 px-[15px] py-[70px] lg:py-[120px]">
        <div className="h-[15px]"></div>
        <div
          className="max-w-[800px] text-center text-4xl font-extrabold leading-tight md:text-5xl"
          style={{
            color: "#ccd9f0",
          }}
        >
          <h2 className="">
            Scintilla is a real world asset tokenization protocol.
          </h2>
        </div>
        <div className="h-[100px]"></div>
        <div className="prose max-w-screen-sm text-xl leading-relaxed dark:prose-invert">
          <p>
            The Scintilla Protocol introduces an innovative architecture that
            merges the robustness of decentralized networks with the flexibility
            of modular design. Through the marriage of proof-of-work side-chains
            to a central proof-of-stake chain, Scintilla achieves both
            horizontal and vertical scalability without sacrificing the inherent
            advantages of decentralization.
          </p>
          <ul>
            <li>
              <b className="font-extrabold">Strength in Fusion</b> Combining the
              best of both worlds - decentralized robustness with modular
              flexibility.
            </li>
            <li>
              <b className="font-extrabold">Dual-chain Integration</b>{" "}
              Seamlessly connecting proof-of-work side-chains to a foundational
              proof-of-stake chain.
            </li>
            <li>
              <b className="font-extrabold">Uncompromised Scalability</b>{" "}
              Expanding both horizontally and vertically, while upholding the
              core principles of decentralization.
            </li>
          </ul>
          <p>
            Scintilla is a next-gen protocol, fusing the power of decentralized
            networks with modular flexibility. By integrating proof-of-work
            side-chains with a central proof-of-stake chain, we ensure unmatched
            scalability and true decentralization. Our platform readily supports
            specialized services, from banking to smart contracts.{" "}
          </p>
          <p>
            Our vision? To revolutionize asset management. Instead of
            introducing a new coin, we leverage module fees, providing both
            economic versatility and simplicity. With Scintilla, witness the
            future where classic cryptography seamlessly converges with
            cutting-edge design.
          </p>
        </div>
        <div className="h-[100px]"></div>
        <div className="m-auto max-w-screen-xl gap-[12px] md:columns-2 xl:columns-3">
          <a className="block" href="/docs/protocol-design">
            <div className="mb-[12px] break-inside-avoid-column rounded-[4px] border-[2px] border-gray-200 from-pink-200/50 to-purple-200/50 px-[20px] py-[16px] text-gray-800 hover:border-pink-900 hover:bg-gradient-to-br hover:text-pink-900 dark:border-gray-800 dark:from-pink-500/10 dark:to-purple-500/10 dark:text-gray-400 hover:dark:border-pink-900 hover:dark:text-gray-100">
              <div className="flex flex-row justify-between p-0 pb-3 text-xl font-semibold">
                <p>Scintilla Protocol Design</p>
                <svg
                  aria-hidden="true"
                  className="mr-[-6px] h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="p-0 text-lg">
                Dive into Scintilla&rsquo;s advanced protocol: side-chains, core
                chain, and scalability principles.
              </div>
            </div>
          </a>
          <a className="block" href="/docs"></a>
          <div className="mb-[12px] break-inside-avoid-column rounded-[4px] border-[2px] border-gray-200 from-pink-200/50 to-purple-200/50 px-[20px] py-[16px] text-gray-800 hover:border-pink-900 hover:bg-gradient-to-br hover:text-pink-900 dark:border-gray-800 dark:from-pink-500/10 dark:to-purple-500/10 dark:text-gray-400 hover:dark:border-pink-900 hover:dark:text-gray-100">
            <a className="block" href="/docs/p2p-communication">
              <div className="flex flex-row justify-between p-0 pb-3 text-xl font-semibold">
                <p>Peer-to-Peer Communication in Scintilla</p>
                <svg
                  aria-hidden="true"
                  className="mr-[-6px] h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="p-0 text-lg">
                Uncover the intricacies of Scintilla&rsquo;s peer-to-peer
                communication.
              </div>
            </a>
          </div>
          <a className="block" href="/docs"></a>
          <div className="mb-[12px] break-inside-avoid-column rounded-[4px] border-[2px] border-gray-200 from-pink-200/50 to-purple-200/50 px-[20px] py-[16px] text-gray-800 hover:border-pink-900 hover:bg-gradient-to-br hover:text-pink-900 dark:border-gray-800 dark:from-pink-500/10 dark:to-purple-500/10 dark:text-gray-400 hover:dark:border-pink-900 hover:dark:text-gray-100">
            <a className="block" href="/docs/banking-module">
              <div className="flex flex-row justify-between p-0 pb-3 text-xl font-semibold">
                <p>Banking Module and Assets:</p>
                <svg
                  aria-hidden="true"
                  className="mr-[-6px] h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="p-0 text-lg">
                Discover how Scintilla manages assets with its innovative
                banking module.
              </div>
            </a>
          </div>
          <a className="block" href="/docs"></a>
          <div className="mb-[12px] break-inside-avoid-column rounded-[4px] border-[2px] border-gray-200 from-pink-200/50 to-purple-200/50 px-[20px] py-[16px] text-gray-800 hover:border-pink-900 hover:bg-gradient-to-br hover:text-pink-900 dark:border-gray-800 dark:from-pink-500/10 dark:to-purple-500/10 dark:text-gray-400 hover:dark:border-pink-900 hover:dark:text-gray-100">
            <a className="block" href="/docs/security">
              <div className="flex flex-row justify-between p-0 pb-3 text-xl font-semibold">
                <p>Security in Scintilla</p>
                <svg
                  aria-hidden="true"
                  className="mr-[-6px] h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="p-0 text-lg">
                Learn about the multiple layers of security implemented in the
                Scintilla protocol.
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
