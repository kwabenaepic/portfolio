import * as React from "react";
import { Button, Spacer, Card, Text } from "@nextui-org/react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "../components/UserIcon";
import Link from "next/Link";
import RightNav from "../components/RightNav";

export default function Home() {
  return (
    <div className="container ">
      <div className="flex flex-row w-screen h-screen ">
        <div className="flex flex-1 bg-white ">
          <div className="flex flex-col justify-center items-start p-36 space-y-2 ">
            <div className="text-2xl font-bold ">HI THERE!</div>
            <div className="flex flex-row space-x-2">
              <div className="text-4xl font-bold">I'M</div>
              <div className="text-4xl font-bold text-yellow-500">BENJAMIN</div>
            </div>
            <div className="bg-yellow-500 p-1">
              <div className="text-xs font-bold">
                GAME DESIGN / PHOTOGRAPHER
              </div>
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <Button color="warning">MORE ABOUT ME</Button>
          </div>
        </div>

        <div className="flex flex-1 ">
          <div className="bg-red-100 w-full items-center justify-end p-8 flex "></div>
        </div>
        <div className="flex items-center  justify-center  ">
          <RightNav />
        </div>
      </div>
    </div>
  );
}
