"use client";
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

const navlist:{id:number; name:string; href:string} []= [
  {
    id: 1,
    name: "Home",
    href: "/"
  },
   {
    id: 2,
    name: "Articles",
    href: "/articles"
  },
   {
    id: 3,
    name: "Contact",
    href: "/Contact"
  },
   {
    id: 4,
    name: "Services",
    href: "/services"
  },
  {
    id: 5,
    name: "Gallary",
    href: "/gallery"
  },
  // {
  //   id: 5,
  //   name: "Folder",
  //   href: "/F1"
  // }
];

function Navbar() {
    const pathname = usePathname ();
  return (
    <div>
        <nav className= 'p-4 flex justify-center  gap-8 text-2xl items-center bg-cyan-800 text-white'>
     {navlist.map(nav=>{
        const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && nav.href !== "/");
      return <Link className={isActive ? "underline text-blue-400 ": " "} href={nav.href} key={nav.id}>{nav.name}</Link>
     })}
    </nav>
    </div>
  )
    
}

export default Navbar
