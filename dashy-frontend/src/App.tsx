import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen justify-between">
      <div className=" bg-slate-600 pr-44 px-8">
        <div className="logo mt-6 ">
          <div className="rounded-md p-5 m-4 bg-blue-700 w-3"></div>
        </div>
        <div className="mx-5 px-4 py-8 bg-gray-700 rounded-md  border-b-4"></div>
        <div className="bg-gray-800  h-[1px] my-12"></div>

        {/* containers */}

        <div>
          <div className="mx-5">
            <div className="flex gap-4 m-6">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>
            <div className="flex gap-4 m-6">
              <div className="logo p-4 bg-black rounded-full"></div>
              <h3>Something here</h3>
            </div>

            <div className="bottom-16">
              <div className="bg-gray-800  h-[1px] my-12"></div>
              <div>contact us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-70">
        <div className="flex mt-6 mr-6 gap-8 justify-start">
          <button className="rounded-full bg-red-700 p-4 flex-shrink "></button>

          <button className="rounded-full bg-slate-900 p-4"></button>
          <button className="rounded-full bg-slate-900 p-4"></button>
          <button className="rounded-full bg-slate-900 p-4"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
