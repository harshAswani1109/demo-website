import React from "react";
import error from "@/public/assets/404.jpg";
import errorMobile from "@/public/assets/404mobile.jpg";
import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="h-full w-screen hidden md:block"
        style={{
          backgroundImage: `url(${error.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1
        className="md:hidden h-full text-2xl font-semibold flex justify-start pt-6 items-center flex-col  gap-y-6 absolute w-full"
        style={{
          backgroundImage: `url(${errorMobile.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Page Not Found
        <Link
          href="/"
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center gap-4 justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
            Go
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
            Home
          </span>
          <span class="relative invisible">Button Text</span>
        </Link>
      </h1>
    </div>
  );
}
