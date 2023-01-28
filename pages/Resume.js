import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/Link";
import LeftPanel from "../components/LeftPanel";
import RightNav from "../components/RightNav";


const Resume = () => {
  return (
    <div className="container">
      <div className="flex bg-slate-100 flex-row w-screen min-h-screen mx-au">
        <LeftPanel />

        <div className="flex flex-auto w-screen bg-gray-200">
          <div className="m-2 flex flex-col mt-20 relative">
            <div className=" mx-20 items-center justify-center flex border border-gray-500 py-8">
              <div className="text-5xl items-center font-bold text tracking-widest">
                RESUME
              </div>
            </div>
            <div className="flex items-center justify-center ">
                <RightNav />
              </div>
            <div className=" divide-y divide-dashed divide-neutral-500">
        
              <div className="mx-20 mt-6 mb-6 ">
                <p className="text-2xl font-bold">EDUCATION</p>
                <div className="flex flex-row mt-2">
                  <div className="flex flex-1 flex-col ">
                    <div className="">
                      <div className="text-xs font-bold text-white w-fit bg-yellow-500 p-1">
                        GAME DESIGN
                      </div>
                      <p className="text-xs font-bold text-black">
                        GAME DESIGN
                      </p>
                      <p className="text-xl mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. k.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col ">
                    <div className="">
                      <div className="text-xs font-bold text-white w-fit bg-yellow-500 p-1">
                        GAME DESIGN
                      </div>
                      <p className="text-xs font-bold text-black">
                        GAME DESIGN
                      </p>
                      <p className="text-xl mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. k.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col ">
                    <div className="">
                      <div className="text-xs font-bold text-white w-fit bg-yellow-500 p-1">
                        GAME DESIGN
                      </div>
                      <p className="text-xs font-bold text-black">
                        GAME DESIGN
                      </p>
                      <p className="text-xl mt-3 ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. k.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="mx-20 mt-6 ">
                <p className="text-2xl font-bold">EXPERIENCE</p>
                <div className="flex flex-row mt-2">
                  <div className="flex flex-1 flex-col ">
                    <div className="">
                      <div className="text-xs font-bold text-white w-fit bg-yellow-500 p-1">
                        GAME DESIGN
                      </div>
                      <p className="text-xs font-bold text-black">
                        GAME DESIGN
                      </p>
                      <p className="text-xl mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. k.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col ">
                    <div className="">
                      <div className="text-xs font-bold text-white w-fit bg-yellow-500 p-1">
                        GAME DESIGN
                      </div>
                      <p className="text-xs font-bold text-black">
                        GAME DESIGN
                      </p>
                      <p className="text-xl mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. k.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col ">
                    <div className="">
                      <div className="text-xs font-bold text-white w-fit bg-yellow-500 p-1">
                        GAME DESIGN
                      </div>
                      <p className="text-xs font-bold text-black">
                        GAME DESIGN
                      </p>
                      <p className="text-xl mt-3 ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. k.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
