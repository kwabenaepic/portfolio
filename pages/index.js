import Image from "next/image";
import Link from "next/Link";
import LeftNav from "../components/LeftNav";
import LeftPanel from "../components/LeftPanel";
import RightNav from "../components/RightNav";
import { Button, Spacer, Card, Text } from "@nextui-org/react";

export default function About() {
  return (
    <div className="container ">
      <div className="flex bg-slate-100 flex-row w-screen h-screen mx-auto">
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

        <div className="flex flex-1 w-full bg-gray-200">
          <div className="m-2 flex flex-col mt-20 w-full ">
       
      
            <div className="flex items-center justify-center relative">
              <RightNav />
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}
