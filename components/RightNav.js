import { Button, Spacer, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import {InboxIcon } from "@heroicons/react/24/solid";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Link from "next/Link";
import { useEffect, useState } from "react";

const RightNav = ({children, href }) => {
    const [getroute, setGetroute] = useState("")
    const router = useRouter()
    const currentRoute = router.pathname;




    // const style = {
    //   marginRight: 10,
    //   color: router.asPath === href ? 'red' : 'black',
    // }

    const handleClick = (e) => {

        // console.log(pathname);
      }

  useEffect(() => {

  }, []);
  return (
    <div className="">
      <div className=" flex flex-col space-y-8 absolute right-0 py-6 px-2
       rounded-full bg-yellow-500">
        <div>
          <Link href="/" className={currentRoute === '/' ? " rounded-full bg-white  hover:bg-yellow-600 p-2 py-3 ": "rounded-full bg-yellow-500  hover:bg-yellow-600 p-2 py-3"}>
            <button
            href={href}
    
             onClick={handleClick} 
              type="button"
              class=""
            >
              <HomeIcon className="h-6 w-6 text-black"  />
            </button>
          </Link>
        </div>
        <div>
          <Link href="/about" className={currentRoute === '/about' ? " rounded-full bg-white  hover:bg-yellow-600 p-2 py-3 ": "rounded-full bg-yellow-500  hover:bg-yellow-600 p-2 py-3"}>
            <button
                 onClick={handleClick} 
              type="button"
              className=""
            >
              <UserIcon className="h-6 w-6 text-black" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="/resume" className={currentRoute === '/resume' ? " rounded-full bg-white  hover:bg-yellow-600 p-2 py-3 ": "rounded-full bg-yellow-500  hover:bg-yellow-600 p-2 py-3"}>
            <button
              type="button"
              class=""
            >
              <BriefcaseIcon className="h-6 w-6 text-black" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="/portfolio" className={currentRoute === '/portfolio' ? " rounded-full bg-white  hover:bg-yellow-600 p-2 py-3 ": "rounded-full bg-yellow-500  hover:bg-yellow-600 p-2 py-3"}>
            <button
              type="button"
              class=""
            >
              <InboxIcon className="h-6 w-6 text-black" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="/testimonials" className={currentRoute === '/testimonials' ? " rounded-full bg-white  hover:bg-yellow-600 p-2 py-3 ": "rounded-full bg-yellow-500  hover:bg-yellow-600 p-2 py-3"}>
            <button
              type="button"
              class=""
            >
              <MegaphoneIcon className="h-6 w-6 text-black" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="/contact" className={currentRoute === '/contact' ? " rounded-full bg-white  hover:bg-yellow-600 p-2 py-3 ": "rounded-full bg-yellow-500  hover:bg-yellow-600 p-2 py-3"}>
            <button
              type="button"
              class=""
            >
              <RocketLaunchIcon className="h-6 w-6 text-black" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
