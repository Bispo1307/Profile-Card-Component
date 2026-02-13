import imageVictor from "../images/image-victor.jpg";
import bgPatternCard from "../images/bg-pattern-card.svg";

function App() {
  return (
    <div className="container min-w-full h-screen flex items-center justify-between bg-cyan-400 bg-cover bg-[url(../images/bg-pattern-bottom.svg)] bg-no-repeat">
      <div className="w-[90%] sm:w-auto mx-auto rounded-xl overflow-hidden shadow-lg">
        <div>
          <img className="w-full" src={bgPatternCard} alt="Background Card" />
        </div>
        <div className="px-6 pb-6 bg-gray-50">
          <img
            className="relative bottom-12 border-4 mx-auto border-white rounded-full"
            src={imageVictor}
            alt="Image Victor"
          />
          <div className="flex items-center justify-center gap-2.5">
            <strong className="font-['Poppins'] text-2xl text-gray-900 font-bold">
              Victor Crest
            </strong>
            <span className="font-['Poppins'] text-2xl text-gray-600 font-normal">
              26
            </span>
          </div>
          <p className="font-['Poppins'] text-lg text-center text-gray-600 mt-2 mb-4">
            London
          </p>
          <div className="border-t border-gray-300 py-4 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <strong className="font-['Poppins'] text-2xl text-gray-900">
                80K
              </strong>
              <small className="font-['Poppins'] text-gray-600">
                Followers
              </small>
            </div>
            <div className="flex flex-col items-center">
              <strong className="font-['Poppins'] text-2xl text-gray-900">
                803K
              </strong>
              <small className="font-['Poppins'] text-gray-600">Likes</small>
            </div>
            <div className="flex flex-col items-center">
              <strong className="font-['Poppins'] text-2xl text-gray-900">
                1.4K
              </strong>
              <small className="font-['Poppins'] text-gray-600">Photos</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
