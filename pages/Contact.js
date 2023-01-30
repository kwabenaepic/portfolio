import LeftPanel from "../components/LeftPanel";
import RightNav from "../components/RightNav";
import { PhotoIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="container ">
      <div className="flex bg-slate-100 flex-row w-screen h-screen mx-auto">
        <LeftPanel />

        <div className="flex flex-auto w-screen bg-gray-200">
          <div className="flex flex-col">
            <div className="m-2 flex flex-col mt-20">
              <div className=" mx-20 items-center justify-center flex border border-gray-500 py-8">
                <div className="text-8xl items-center font-bold text tracking-widest">
                  CONTACT
                </div>
              </div>
              <div className="mx-20 mt-6">
                <p className="text-3xl mt-3">
                  Feel <span className="font-bold">free</span> to contact me!
                </p>
                <p className="text-xl mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="flex items-center justify-center relative">
                <RightNav />
              </div>
            </div>

            <div className="flex justify-center my-20">
          <div className="flex flex-row">
          <div className=" mx-20 flex flex-row items-center space-x-3 ">
                <div className=" h-full w-full ">
                  <PhotoIcon className="h-48 w-48 text-black" />
                </div>
                <div className="flex flex-col justify-cente items-start">
                  <p>www.contact.com </p>
                  <p>www.contactme.com </p>
                </div>
              </div>

              <div className=" mx-20 flex flex-row items-center space-x-3 ">
                <div className=" h-full w-full ">
                  <PhotoIcon className="h-48 w-48 text-black" />
                </div>
                <div className="flex flex-col justify-cente items-start">
                  <p>0244444444 </p>
                  <p>0233333333 </p>
                </div>
              </div>
          </div>
            </div>

            <div className="m-2 flex justify-center">
              <div className="mx-20 mt-6">
                <p className="text-3xl mt-3 font-bold">THANKS FOR PATIENCE!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
