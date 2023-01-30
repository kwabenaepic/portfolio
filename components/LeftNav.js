import { Button, Spacer, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const LeftNav = ({ children, href }) => {
  const [getroute, setGetroute] = useState("");
  const router = useRouter();
  const currentRoute = router.pathname;

  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? 'red' : 'black',
  // }

  const handleClick = (e) => {
    // console.log(pathname);
  };

  return (
    <div className=" items-center flex justify-center  text-center mt-20 px-8">
      <div className=" flex flex-col space-y-4 py-3 px-2 rounded-full bg-yellow-500">
        <div className=" ">
          <Link href="/">
            <p
              className={
                currentRoute === "/"
                  ? "text-white font-bold  hover:text-black  "
                  : "font-bold  hover:text-white "
              }
            >
              <a>HOME</a>
            </p>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <button onClick={handleClick} type="button" className="">
              <p
                className={
                  currentRoute === "/about"
                    ? "text-white font-bold hover:text-black  "
                    : "text-black font-bold hover:text-white"
                }
              >
                {" "}
                <a>ABOUT ME</a>
              </p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/resume"
            className={
              currentRoute === "/resume"
                ? " text-white font-bold hover:text-black  "
                : "  text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold">
                {" "}
                <a>RESUME</a>
              </p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/portfolio"
            className={
              currentRoute === "/portfolio"
                ? " text-white font-bold hover:text-black  "
                : "  text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold">
                {" "}
                <a>PORTFOLIO</a>
              </p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/testimonials"
            className={
              currentRoute === "/testimonials"
                ? " text-white font-bold hover:text-black  "
                : "  text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold">
                {" "}
                <a>TESTIMONIALS</a>
              </p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className={
              currentRoute === "/contact"
                ? " text-white font-bold hover:text-black "
                : "text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold ">
                {" "}
                <a>CONTACT</a>
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
