import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#30336b" }}
    >
      {/* Left Content  */}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* Blog Logo  */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* logo  */}
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
            alt="logo"
          />
          {/* logo text  */}
          <span className="ml-3 text-xl text-white">Devknus</span>
        </div>

        {/* items  */}
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 BlogScope —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @blogscope
          </a>
        </p>

        {/* Right item  */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Icon 1  */}
          <a className="text-gray-500" href="https://x.com/KumarXi5468">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          {/* Icon 2  */}
          <a
            className="ml-3 text-gray-500"
            href="https://github.com/Kumar2004-2009"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.85 10.94.57.1.78-.24.78-.54v-1.92c-3.18.69-3.85-1.54-3.85-1.54-.52-1.31-1.27-1.65-1.27-1.65-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.94.1-.74.4-1.24.73-1.53-2.54-.28-5.22-1.27-5.22-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.42.12-2.95 0 0 .96-.31 3.15 1.18.91-.26 1.88-.4 2.85-.4.97 0 1.94.14 2.85.4 2.19-1.49 3.15-1.18 3.15-1.18.63 1.53.24 2.66.12 2.95.73.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.66.42.36.77 1.09.77 2.2v3.26c0 .31.21.65.79.54A10.97 10.97 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>

          {/* Icon 3  */}
          <a
            className="ml-3 text-gray-500"
            href="https://www.instagram.com/kumar.piyush.ug/?hl=en"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>

          {/* Icon 4  */}
          <a
            className="ml-3 text-gray-500"
            href="www.linkedin.com/in/kumar-piyush-1314ba1b9"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
