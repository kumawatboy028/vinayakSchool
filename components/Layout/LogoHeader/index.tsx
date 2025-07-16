import Image from "next/image";
import Link from "next/link";

const LogoHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md py-3">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="Vinayak International School Logo"
            width={240} // increased size
            height={100}
            className="h-auto w-auto"
          />
        </div>

        {/* Social Links */}
        <ul className="flex gap-4 text-sm text-gray-800 dark:text-gray-300">
          <li>
            <Link href="/" className="hover:underline">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Instagram
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogoHeader;
