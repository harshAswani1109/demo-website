import React from "react";
import error from "@/public/assets/404.jpg";
// import { Button } from "@/components/ui/button";
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
      <h1 className="md:hidden h-full text-2xl font-semibold flex justify-center items-center">
        Page Not Found
        {/* <Button>Go to Home</Button> */}
      </h1>
    </div>
  );
}
