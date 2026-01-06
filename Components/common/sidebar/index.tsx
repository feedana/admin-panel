"use client";
import { links } from "@/Mock/sidebar"
import { IAllLinks } from "@/Types/sidebar"
import { ILinks } from "@/Types/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
 const path=usePathname();  
  return (
    <div className="bg-[#003366] max-w-75  text-white  w-full h-screen">
      <div className="h-14 border-b border-color-[rgba(255,255,255,0.1)] flex items-center justify-center text-center font-bold">
        <Link href="/"><span className="uppercase px-6 text-[22px] font-extrabold">FS41</span>
        <span className="text-[#60a5fa] ml-1">Admin Panel</span></Link>
      </div>

      <div className="p-[20px_10px]">
      {links.map(({id,title,links}: IAllLinks) => (
        <div key={id}>
            <h2 className=" uppercase text-[11px] text-[rgba(255,255,255,0.5)] font-bold m-[28px_12px_5px_12px]">{title}</h2>
        
         <div className="flex flex-col gap-2">
            {links.map(({id,title,to}: ILinks) => (
              <Link key={id} href={to} 
              className={`font-medium  p-[10px_14px] text-[14px] capitalize duration-300 rounded-md
              ${path===to ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-transparent'}  
              ${path===to ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'bg-transparent'}`}>
                {title}
                </Link>
            ))}
        </div>
        </div>
      ))
      }
    </div>
    </div>
  )
}


export default Sidebar;