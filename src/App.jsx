import imageVictor from "../images/image-victor.jpg";
import bgPatternCard from "../images/bg-pattern-card.svg";

function App() {
  return (
    <div className="container min-w-full h-screen flex items-center justify-between bg-blue-600 bg-cover bg-[url(../images/bg-pattern-bottom.svg)] bg-no-repeat">
      <div className="w-[90%] sm:w-auto mx-auto rounded-xl overflow-hidden shadow-lg">
        <div>
          <img className="w-full" src={bgPatternCard} alt="Background Card" />
        </div>
        <div className="font-kumbh px-6 pb-6 bg-gray-100">
          <img
            className="relative bottom-12 border-4 mx-auto border-white rounded-full"
            src={imageVictor}
            alt="Image Victor"
          />
          <div className="flex items-center justify-center gap-2.5">
            <strong className="text-2xl text-navy-950 font-bold">
              Victor Crest
            </strong>
            <span className=" text-2xl text-gray-500 font-normal">26</span>
          </div>
          <p className=" text-lg text-center text-gray-500 mt-2 mb-4">London</p>
          <div className="border-t border-gray-300 py-4 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <strong className="text-2xl text-navy-950">80K</strong>
              <small className="text-gray-500">Followers</small>
            </div>
            <div className="flex flex-col items-center">
              <strong className="text-2xl text-navy-950">803K</strong>
              <small className="text-gray-500">Likes</small>
            </div>
            <div className="flex flex-col items-center">
              <strong className="text-2xl text-navy-950">1.4K</strong>
              <small className="text-gray-500">Photos</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
