"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  MdChevronLeft as LuChevronLast,
  MdChevronRight as LuChevronFirst,
} from 'react-icons/md';

import { Settings } from 'lucide-react';
import { TbLogout } from "react-icons/tb";

import { useNavbarContext } from '@/contexts/navbar-context';
import { useNavbarItems } from '@/contexts/navbar-context/items-context';

import NavigationItem from './navigation-item';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator';

const Aside: React.FC = () => {
  const { expanded, setExpanded } = useNavbarContext();
  const pathName = usePathname();
  const navbarItems = useNavbarItems();

  return (
    <aside
      className={`hidden lg:block fixed top-0 h-full transition-all duration-300 ease-in-out bg-neutral-200 dark:bg-neutral-900 z-20 ${
        expanded ? 'w-60' : 'w-16'
      }`}
    >
      {/* Logo and Brand */}
      <Link href="/">
        <div className="flex flex-col justify-center items-center h-[61px] rounded-lg m-1">
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              expanded ? "justify-start" : "justify-center"
            }`}
          >
            <Avatar className={`transition-all duration-300 relative ${expanded ? "left-0": "left-12"}`}>
              <AvatarImage src="https://github.com/s4msec.png" alt="@shadcn" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            {/* Smooth scaling instead of width manipulation */}
            <div
              className={`flex flex-col ml-3 transform transition-all duration-300 ease-in-out ${
                expanded ? "opacity-100 scale-100 ml-3" : "opacity-0 scale-95 ml-0 relative"
              }`}
            >
              <span className="text-black dark:text-white font-bold text-sm">s4msec</span>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">Administrator</span>
            </div>
          </div>
        </div>
      </Link>

      <Separator className='bg-neutral-400/50 dark:bg-neutral-700' />

      {/* Navigation Items */}
      <div className="flex justify-center items-center">
        <ul className="no-scrollbar py-3 overflow-y">
          {navbarItems.map((item) => (
            <NavigationItem
              key={item.text}
              expanded={expanded}
              icon={item.icon}
              text={item.text}
              href={item.href}
              active={pathName.startsWith(item.href)}
              deactivated={item.deactivated}
            />
          ))}
        </ul>
      </div>

      {/* Expand/Collapse Button */}
      <div className="absolute bottom-1/2 -right-[23px] transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center border border-neutral-400/50 bg-neutral-200 dark:bg-neutral-900 text-neutral-500/80 dark:text-white cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <LuChevronLast size={24} /> : <LuChevronFirst size={24} />}
        </div>
      </div>
      {/* Logout Item */}
      <div className="flex justify-center items-center">
          <div className="absolute bottom-0 py-5">
            <NavigationItem
              expanded={expanded}
              icon={<Settings size={20} />}
              href={"/settings"}
              active={pathName.startsWith("/settings")}
              text="Configurações"
            />

            <NavigationItem
              expanded={expanded}
              icon={<TbLogout size={20} />}
              text="Sair"
            />
          </div>
      </div>
    </aside>
  );
};

export default Aside;
