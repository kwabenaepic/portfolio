import Image from "next/image";
import Link from "next/Link";
import LeftNav from "../components/LeftNav";
import LeftPanel from "../components/LeftPanel";
import RightNav from "../components/RightNav";

export default function About() {
  return (
    <div className="container ">
      <div className="flex bg-slate-100 flex-row w-screen h-screen mx-auto">
      <LeftPanel/>
        <div className="flex flex-auto w-screen bg-gray-200">
          <div className="m-2 flex flex-col mt-20">
            <div className=" mx-20 items-center justify-center flex border border-gray-500 py-8">
              <div className="text-5xl items-center font-bold text tracking-widest">
                ABOUT ME
              </div>
            </div>
            <div className="mx-20 mt-6">
              <p className="text-3xl mt-3">
                I'm <span className="font-bold">Benjamin Smith,</span> Graphic
                Designer / Photographer
              </p>
              <p className="text-xl mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex items-center justify-center relative">
              <RightNav />
            </div>
            <div className=" mx-20 flex flex-row mt-6 space-x-4 ">
              <div className="flex flex-1 bg-black h-full">
                <div className="flex flex-col w-full divide-y divide-dashed divide-neutral-500">
                  <div class="flex flex-row divide-x divide-dashed divide-neutral-500 h-full">
                    <div className=" flex flex-col items-center justify-center w-full space-y-2">
                      <p className=" text-yellow-500 text-8xl font-semibold">
                        15+
                      </p>
                      <p className=" text-white">YEARS EXPERIENCE</p>
                    </div>

                    <div className=" flex flex-col items-center justify-center w-full h-full space-y-2">
                      <p className=" text-yellow-500 text-8xl font-semibold">
                        350+
                      </p>
                      <p className=" text-white">PROJECTS DONE</p>
                    </div>
                  </div>
                  <div class="flex flex-row divide-x divide-dashed divide-neutral-500 h-full">
                    <div className=" flex flex-col items-center justify-center w-full h-full space-y-2">
                      <p className=" text-yellow-500 text-8xl font-semibold">
                        200+
                      </p>
                      <p className=" text-white">HAPPY CLIENTS</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full space-y-2">
                      <p className=" text-yellow-500 text-8xl font-semibold">
                        45K
                      </p>
                      <p className=" text-white">FOLLOWERS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-none ">
                <div className="flex flex-col w-96 p-8">
                  <div className="font-bold text-2xl">What I do</div>
                  <div className="flex flex-row space-x-4 mt-2">
                    <div className=" space-y-8">
                      <div className="flex flex-row items-center space-x-4">
                        <div>
                          <div className="bg-red-200 w-32 h-32"></div>
                          <image src="" />
                        </div>
                        <div>
                          <div>
                            <p className="font-bold">PRINT DESIGN</p>
                            <p className=" text-justify">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum is simply
                              dummy text of the printing and typesetting
                              industry.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center space-x-4">
                        <div>
                          <div className="bg-red-200 w-32 h-32"></div>
                          <image src="" />
                        </div>
                        <div>
                          <div>
                            <p className="font-bold">WEB DESIGN</p>
                            <p className=" text-justify">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum is simply
                              dummy text of the printing and typesetting
                              industry.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center space-x-4">
                        <div>
                          <div className="bg-red-200 w-32 h-32"></div>
                          <image src="" />
                        </div>
                        <div>
                          <div>
                            <p className="font-bold">PHOTOGRAPHY</p>
                            <p className=" text-justify">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum is simply
                              dummy text of the printing and typesetting
                              industry.
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
        </div>
      </div>
    </div>
  );
}
