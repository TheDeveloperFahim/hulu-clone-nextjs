import { useRouter } from "next/router";
import requests from "../utils/requests";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex sm:px-20 text-lg whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24  cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-t from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

