import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const navbar = () => {
  return (
    <div className="absolute z-50 w-full">
      <div className="container">
        <nav className="flex justify-between  items-center py-12">
          <div>
            <Image src="./Travello.svg" width={120} height={140} alt="Logo" />
          </div>

          <div>
            <ul className="hidden md:flex justify-between items-center gap-6 text-sm text-white">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none flex items-center text-sm gap-1">
                      <span> Services</span>
                      <span className="items-end pt-1">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.67706e-07 1.00235 3.67706e-07H10.5944C10.7866 -0.000164459 10.9748 0.0550878 11.1365 0.159141C11.2981 0.263194 11.4263 0.411637 11.5058 0.586693C11.5853 0.761749 11.6126 0.955998 11.5845 1.14618C11.5564 1.33636 11.474 1.51441 11.3474 1.659L6.55135 7.139C6.45749 7.24641 6.34174 7.3325 6.21186 7.39148C6.08198 7.45046 5.94099 7.48098 5.79835 7.48098C5.65571 7.48098 5.51472 7.45046 5.38484 7.39148C5.25497 7.3325 5.13921 7.24641 5.04535 7.139V7.14Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#d9d9d93b] mt-2 outline-none border-0 rouneded-lg">
                      <DropdownMenuItem>
                        <a href="#" className="hover:rouneded-[40px]">
                          Honeymoon Packages
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Tours Packages</DropdownMenuItem>
                      <DropdownMenuItem>Musical Events</DropdownMenuItem>
                      <DropdownMenuItem>Build Package</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>

              <li>
                <Link href="/landscapes">Landscapes</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button>Get in Touch</Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
