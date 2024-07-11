import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-main-color text-[#2e2e2e] py-6">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
        </div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} 개발 참 십지않조. All rights
            reserved.
          </p>
          <p className="text-sm text-[#2e2e2e]">
            Follow us on
            <a
              href="https://teamsparta.notion.site/A10-9c2b3f89d6934fcab6c77c1dedc99a0a"
              className="text-sub-color mx-1"
            >
              Team Notion
            </a>
            ,
            <a href="https://facebook.com" className="text-sub-color  mx-1">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
