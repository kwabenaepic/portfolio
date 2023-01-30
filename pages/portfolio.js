import LeftPanel from "../components/LeftPanel";
import RightNav from "../components/RightNav";

const Portfolio = () => {
    return (
        <div className="container ">
          <div className="flex bg-slate-100 flex-row w-screen h-screen mx-auto">
          <LeftPanel/>
        
            <div className="flex flex-auto w-screen bg-gray-200">
              <div className="m-2 flex flex-col mt-20">
                <div className=" mx-20 items-center justify-center flex border border-gray-500 py-8">
                  <div className="text-5xl items-center font-bold text tracking-widest">
                    PORTFOLIO
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
     
              </div>
            </div>
          </div>
        </div>
      );
}

export default Portfolio
