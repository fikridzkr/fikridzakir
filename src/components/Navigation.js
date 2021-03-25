import React from "react";
import { Link as ScrollLink } from "react-scroll";
import content from "../content";
export default function Navigation() {
  return (
    <div
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex items-center justify-between mx-auto w-10/12 py-3 text-white font-dosis">
        <h1 className="text-3xl font-bold">
          {content.nav.logo}{" "}
          <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
        </h1>
        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
