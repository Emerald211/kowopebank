import { Outlet } from "react-router-dom";

const Onboarding = () => {
  return (
      <div className=" font-serrat grid grid-cols-1 md:grid-cols-2">
          <div className=" text-center items-center flex flex-col justify-center w-full md:h-screen bg-purple-800 h-[50vh] rounded-b-xl md:rounded-b-2xl md:border-b-4">
              <h1 className=" text-white text-4xl font-bold">Kowope Bank</h1>
              <h6 className=" text-xs  md:text-lg italic text-white">Banking made easy...</h6>
          </div>

          <Outlet />
   </div>
  )
}

export default Onboarding;