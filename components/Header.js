import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Header Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Feed"
          />
        </div>
      </div>

      {/* Header Center */}
      {/* flex-grow to expand the center div as much as posisible */}
      <div className="flex justify-center flex-grow ">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Header Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Proile picture */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
