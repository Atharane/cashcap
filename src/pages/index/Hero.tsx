import React from "react"

const Hero = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/polygon.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 ">
        <div className="max-w-2xl mx-auto mt-5 mb-4 text-center">
          <h1 className="block text-6xl font-bold text-gray-700 md:text-5xl lg:text-6xl">
            ₹
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-green-500 to-green-800">
              49,500
            </span>
          </h1>
        </div>

        <div className="flex justify-center">
          <a
            className="inline-flex items-center pl-3 text-xs bg-white border border-gray-200 rounded-full texttransition gray-800 gap-x-2 hover:border-gray-300"
            href="#"
          >
            View breakdown
            <span className="inline-flex items-center justify-center px-3 py-2 m-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full gap-x-2">
              <svg
                className="w-2.5 h-2.5"
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
