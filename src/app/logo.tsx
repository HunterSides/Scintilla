import Image from "next/image";

export default function Logo() {
  return (
    <a
      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
      href="https://www.scintilla.network/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/scintilla-logo.svg"
        alt="Scintilla Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </a>
  );
}
