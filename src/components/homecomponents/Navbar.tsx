"use client"

import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthServices";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut } from "lucide-react";
import LoginForm from "../modules/auth/login/LoginForm";


const navRoutes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Classes",
    path: "/classes"
  },
  {
    name: "Tutors",
    path: "/tutors"
  },

];


const Navbar = () => {

  const {user, setIsLoading} = useUser();

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  }

  return (
    <div className="sticky top-0 z-50">
      <div className=" bg-white/80 w-full px-10 py-8 shadow-lg backdrop-blur-md">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-5">
          <Image 
            src={'https://r.mobirisesite.com/1252901/assets/images/g8a76ea9448036ea7c8e3e8556170-h_m7qbhjee.png'} 
            alt="logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <p className="text-xl font-semibold">TurtorLink</p>
          </div>

          <div className="md:flex items-center lg:gap-20 gap-6 hidden">
            {navRoutes.map((route, index) => (
              <Link key={index} href={route.path} className="font-semibold text-lg">
                {route.name}
              </Link>
            ))}
             {
              user ? (
                <>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src={"https://github.com/shadcn.png"} />
                        <AvatarFallback>User</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">Profile</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">
                        <Link href="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator/>
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut />
                        <span>Log Out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </> 
              ) : (
                <LoginForm/>
              )
             }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
