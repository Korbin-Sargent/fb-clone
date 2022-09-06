import React from 'react';
import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";


function Header() {
  return (
    <div>
        {/* Header Left */}
        <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          />
          </div>
    <div className="flex">
      <MagnifyingGlassIcon className="h-6"/>
      <input type="text" placeholder='Search Feed' />
    </div>

        {/* Header Center */}
        {/* Header Right */}

    </div>
  )
}

export default Header