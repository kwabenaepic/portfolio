import { Button, Spacer, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/Link";
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
                HOME
              </p>
       
          </Link>
        </div>
        <div>
          <Link
            href="/About"
   
          >
            <button onClick={handleClick} type="button" className="">
              <p className={
              currentRoute === "/About"
                ? "text-white font-bold hover:text-black  "
                : "text-black font-bold hover:text-white"
            }>ABOUT ME</p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/Resume"
            className={
              currentRoute === "/Resume"
                ? " text-white font-bold hover:text-black  "
                : "  text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold">RESUME</p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/Portfolio"
            className={
              currentRoute === "/Portfolio"
                ? " text-white font-bold hover:text-black  "
                : "  text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold">PORTFOLIO</p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/Testimonials"
            className={
              currentRoute === "/Testimonials"
                ? " text-white font-bold hover:text-black  "
                : "  text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold">TESTIMONIALS</p>
            </button>
          </Link>
        </div>
        <div>
          <Link
            href="/Contact"
            className={
              currentRoute === "/Contact"
                ? " text-white font-bold hover:text-black "
                : "text-black font-bold hover:text-white"
            }
          >
            <button type="button" class="">
              <p className="font-bold ">CONTACT</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
