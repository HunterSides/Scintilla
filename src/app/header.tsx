import Logo from "./logo";
import "./MainContent.css";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="dark left-0 top-0 block h-[85px] w-screen flex-row items-center justify-center border-b border-t border-gray-800  bg-gray-900 text-gray-200 md:flex">
      <header className="w-screen-xl flex h-full w-full flex-row  items-center justify-between px-[var(--horizontal-padding)] text-center">
        <Link href="/">
          {" "}
          <Image
            src="/scintilla-logo.svg"
            alt="Scintilla Logo"
            className="dark:invert"
            width={60}
            height={60}
          />
        </Link>

        <nav className="h-full list-none flex-row items-center justify-end gap-6 whitespace-nowrap sm:flex">
          <a
            className="text-lg font-medium hover:no-underline"
            href="https://discord.gg/UfZkkaTxV4"
          >
            <Image
              src="/outline-discord.svg"
              alt="Discord Logo"
              className="dark:invert"
              color="#fff"
              width={30}
              height={30}
            />
          </a>

          <a
            className="text-lg font-medium hover:no-underline"
            href="https://www.reddit.com/r/ScintillaLabs/"
          >
            <Image
              src="/reddit-loop.svg"
              alt="reddit Logo"
              className="dark:invert"
              width={35}
              height={35}
            />
          </a>
          <a
            className="text-lg font-medium hover:no-underline"
            href="https://twitter.com/ScintillaLabs"
          >
            <Image
              src="/twitter-x-alt.svg"
              alt="twitter-x-Logo"
              className="dark:invert"
              width={25}
              height={25}
            />
          </a>
        </nav>
      </header>
    </div>
  );
}
