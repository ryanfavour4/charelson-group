
import logo from "/assets/icons/charleson-group-logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-primary">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img
                src={logo}
                alt="logo"
                className="w-20 md:w-22"
                width={100}
                height={50}
              />
            </a>

            <p className="max-w-md mx-auto mt-4 text-white">
              Charleson Group — Luxury Living, Hassle-Free.
            </p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"></div>
          </div>

          <hr className="my-10 text-black" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-white">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                className="mx-2 text-sm text-white transition-colors duration-300 hover:text-red-500 dark:hover:text-red-500"
                aria-label="Reddit"
              >
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-white transition-colors duration-300 hover:text-red-500 dark:hover:text-red-500"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-white transition-colors duration-300 hover:text-red-500 dark:hover:text-red-500"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
