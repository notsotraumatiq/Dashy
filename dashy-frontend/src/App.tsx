import "./App.css";

function App() {
  return (
    // wasnt able to do 30% and 70% for the two containers
    <div className="flex w-screen h-screen justify-between">
      <div className=" bg-slate-600 w-64">
        <div className="logo mt-6">
          <div className="rounded-md p-5 m-4 bg-blue-700 w-3"></div>
        </div>
        <div className="mx-5 px-4 py-8 bg-gray-700 rounded-md  border-b-4"></div>
        <div className="bg-gray-800  h-[1px] my-12"></div>

        {/* containers */}

        <div>
          <div className="mx-5">
            <div className="flex gap-4 m-6 items-center ">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6 items-center">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6 items-center">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6 items-center">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6 items-center">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6 items-center">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
          </div>
          <div className="bottom-16">
            <div className="bg-gray-800  h-[1px] my-12"></div>
            <div>contact us</div>
          </div>
        </div>
      </div>
      <div className="w-70">
        <div className="">
          <div className="flex mt-6 mr-6 gap-8 justify-end mb-20">
            {/* couldnt separate out the 1 and the others */}
            <button className="rounded-full bg-red-700 p-4 flex-shrink "></button>

            <button className="rounded-full bg-slate-900 p-4"></button>
            <button className="rounded-full bg-slate-900 p-4"></button>
            <button className="rounded-full bg-slate-900 p-4"></button>
          </div>
          <div className="card flex gap-5 mx-4 mt-32 justify-start w-max">
            <div className="card flex-1 p-12 bg-lime-500 rounded-xl ">
              <h3>Budget</h3>
              {/* LOGO Doesnt work */}
              <div className="logo bg-black rounded-full p-4"></div>

              <h2 className="font-bold text-2xl">$24</h2>
              <p className="text-base">
                <strong>12% |</strong> since last month
              </p>
            </div>
            <div className="card flex-1 p-12 bg-lime-500 rounded-xl ">
              <h3>Budget</h3>
              <div className="logo bg-black rounded-full p-4 top-0 right-0 "></div>
              <h2 className="font-bold text-2xl">$24</h2>
              <p className="text-base">
                <strong>12% |</strong> since last month
              </p>
            </div>
            <div className="card flex-1 p-12 bg-lime-500 rounded-xl ">
              <h3>Budget</h3>
              <div className="logo bg-black rounded-full p-4 top-2 right-4 "></div>
              <h2 className="font-bold text-2xl">$24</h2>
              <p className="text-base">
                <strong>12% |</strong> since last month
              </p>
            </div>
            <div className="card flex-1 p-12 bg-lime-500 rounded-xl ">
              <h3>Budget</h3>
              <div className="logo bg-black rounded-full p-4 top-2 right-4 "></div>
              <h2 className="font-bold text-2xl">$24</h2>
              <p className="text-base">
                <strong>12% |</strong> since last month
              </p>
            </div>
          </div>
          {/* couldnt do space betweem */}
          <div className="flex w-max mt-7 gap-5 h-20 ">
            <div className="flex-grow pt-12 pb-48 px-14 bg-red-600 rounded-xl"></div>
            <div className="flex-grow p-12 bg-red-600 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
