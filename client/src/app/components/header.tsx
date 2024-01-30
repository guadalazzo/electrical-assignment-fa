import Image from "next/image";

const Header = () => (
  <header className="h-112 p-44">
    <Image
      src="/fastned.svg"
      alt="Fastned Logo"
      width={184}
      height={24}
      priority
    />
  </header>
);

export default Header;
