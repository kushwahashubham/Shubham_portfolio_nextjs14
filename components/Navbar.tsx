"use client";
import { images, navigationConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white/25 backdrop-blur-sm border border-solid border-white/[0.18] fixed z-20">
      <div className="flex justify-start items-center">
        <Image
          src={images.logo}
          alt="logo"
          className=" w-[90px] h-5 min-[2000px]:w-[180px] min-[2000px]:h-[80px] "
        />
      </div>
      <ul className=" flex-1 flex justify-center items-center list-none max-[900px]:hidden">
        {navigationConstants.map((item) => (
          <li
            key={`link-${item}`}
            className="app__flex p-text my-0 mx-4 cursor-pointer flex-col group"
          >
            <div className=" w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px] group-hover:bg-secondary-color" />
            <Link
              href={`#${item}`}
              className="text-gray-color no-underline flex-col uppercase transition-all duration-300 ease-in-out hover:text-secondary-color"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <Sheet>
        <SheetTrigger
          asChild
          className=" w-[35px] h-[35px] rounded-full relative flex justify-center items-center bg-secondary-color min-[900px]:hidden"
        >
          <Image
            src={images.hamburger}
            alt="menu icon"
            width={35}
            height={35}
          />
        </SheetTrigger>
        <SheetContent
          side="right"
          className=" bg-white-color shadow-[0_0_20px_rgba(168,168,168,0.15)] min-[900px]:hidden"
        >
          <ul className=" flex-1 flex justify-between items-start flex-col list-none gap-4 mt-8">
            {navigationConstants.map((item) => (
              <li
                key={`link-${item}`}
                className=" cursor-pointer gap-2 group flex flex-row items-center"
              >
                <div className=" w-[10px] h-[10px] bg-transparent rounded-full group-hover:bg-secondary-color transition-all duration-300 ease-in-out" />
                <SheetClose asChild>
                  <Link
                    href={`#${item}`}
                    className="text-gray-color text-[1rem] font-medium no-underline uppercase transition-all duration-300 ease-in-out hover:text-secondary-color"
                  >
                    {item}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
