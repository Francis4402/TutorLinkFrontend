"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUser } from '@/context/UserContext';
import { logout } from '@/services/AuthServices';
import { AlignJustify, LogOut } from 'lucide-react';
import Link from 'next/link';

const dashboardRoutes = [

    {
        path: "/dashboard",
        name: "Dashboard",
    },
    {
        path: "/profile",
        name: "Profile",
    }
]

const Dashboard = () => {

    const {user, setIsLoading} = useUser();

    const handleLogout = () => {
        logout();
        setIsLoading(true);
    }

  return (
    <div>
        <div className='bg-gray-900'>
            <div className='container mx-auto md:px-0 px-5'>
                <div className='flex justify-between items-center py-5'>
                    <div className='flex gap-4'>
                        <Drawer direction='left' defaultOpen>
                            <DrawerTrigger asChild>
                                <Button variant="outline"><AlignJustify/></Button>
                            </DrawerTrigger>
                            
                            <DrawerContent>
                                <div className='mx-auto w-full max-w-sm'>
                                    <DrawerHeader>
                                        <DrawerTitle className='text-center text-2xl'>Dashboard</DrawerTitle>
                                        <DrawerDescription></DrawerDescription>
                                    </DrawerHeader>

                                    <div className='px-10 py-5 flex flex-col gap-4'>
                                        {
                                            dashboardRoutes.map((routes, index) => {
                                                return (
                                                    <Link key={index} href={routes.path}>{routes.name}</Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                        <p className='text-2xl text-white'>Dashboard</p>
                    </div>
                    
                    <div>
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
                                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">
                                        <Link href="/">Home</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">Profile</DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        <LogOut />
                                        <span>Log Out</span>
                                    </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </> 
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard