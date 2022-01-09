import React from 'react'
import { Images } from './assets'

export const App = () => {
  return(
    <div className="w-screen min-h-screen flex justify-center phone:pt-10 md:pt-0 md:items-center relative">
      <img 
        src={Images.Background}
        alt="background"
        className="w-full h-full absolute top-0 left-0 -z-10"
      /> 
      <div className="w-full phone:w-[20rem] md:w-[40rem] md:h-96 flex md:flex-row flex-col justify-between items-center phone:mb-10">
        <div className="bg-iphone-mockup flex flex-col items-center w-full md:w-1/2 bg-main relative md:rounded-l-lg">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-4xl font-extrabold text-white mt-4">Gradie</h1>
            <p className="text-gray-400 mt-2">Beautiful gradients in seconds.</p>
          </div>
          <img 
            src={Images.iPhoneMockup}
            alt="iphone mockup"
            className="h-full -mt-24"
          />
        </div>
        <div className="w-full md:w-1/2 md:rounded-r-lg border bg-white px-10">
          <h1 className="text-4xl font-extrabold mt-4">Login</h1>
          <form className="mt-3 py-2">
            <p className="font-semibold mb-1">Email</p>
            <input 
              name="email"
              type="email"
              placeholder="jphn@example.com"
              className="w-full border-2 focus:outline-none py-2 indent-4 focus:border-red-300 transition-colors duration-500"
            />
            <p className="font-semibold mt-3 mb-1">Password</p>
            <input 
              name="password"
              type="password"
              placeholder="At least 8 characters"
              className="w-full border-2 focus:outline-none py-2 indent-4 focus:border-red-300 transition-colors"
            />
            <div className="my-3 flex">
              <input 
                id="accept"
                type="checkbox"
                name="accept"
                className="mt-1 mr-1"
              />
              <label htmlFor="accept" className="font-medium">By creating an account, you agree to the <span className="border-b hover:border-black duration-500 cursor-pointer text-blue-900">Terms & Conditions.</span></label>
            </div>
            <button className="py-3 w-full bg-main text-white font-semibold rounded-lg hover:bg-white hover:text-main border-2 border-main transition-colors duration-500">Create an Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}