import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" font-poppins bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              className="text-white font-bold text-xl"
              legacyBehavior
              href="/"
            >
              <a className="text-white font-bold text-xl">Jack Meltzer</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link legacyBehavior href="/production">
                <a className=" text-white hover:text-white px-3 py-2 rounded-xl text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]">
                  Work
                </a>
              </Link>
              <Link legacyBehavior href="/directing">
                <a className="  text-white hover:text-white px-3 py-2 rounded-xl text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]">
                  Personal
                </a>
              </Link>
              <Link legacyBehavior href="/about">
                <a className="rounded-xl text-white hover:text-white px-3 py-2 text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]">
                  About
                </a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a className=" text-white hover:text-white px-3 py-2 rounded-xl text-sm bg-[$color-text] hover:bg-[url(https://cldup.com/gn3s3Fg75t.gif)] text-[$color-text]">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
