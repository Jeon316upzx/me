import Link from "next/link";
import Logo from "./Logo";
import { Twitter, Github, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="container lg:mx-auto">
      <header className="mb-[2rem] flex items-center justify-between py-3 mx-2 lg:mx-auto">
        <div className="h-10 w-10">
          <Logo />
        </div>

        <div className="flex items-center gap-1 rounded-full border border-zinc-300 bg-zinc-200 bg-opacity-40 px-1 text-zinc-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          <Link
            className="p-1"
            href="mailto:jeon316@icloud.com"
            target="_blank"
            aria-label="My mail"
          >
            <Mail size={15} />
          </Link>

          <Link
            className="p-1"
            href="https://twitter.com/saint_ifeni"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter size={15} />
          </Link>

          <Link
            className="p-1"
            href="https://github.com/Jeon316upzx"
            target="_blank"
            aria-label="Github"
          >
            <Github size={15} />
          </Link>
        </div>
      </header>
    </header>
  );
};

export default Header;
