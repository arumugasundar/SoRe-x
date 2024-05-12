"use client"
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()
    const [user, setUser] = useState('')

    useEffect(() => {
        
        const fetchUserIdFromLocalStorage = () => {
            const id = localStorage.getItem('user_id');
            if (id && id !== '') {
                setUser(id);
            }
        };
    
        fetchUserIdFromLocalStorage();
    })

    const logoutHandler = () => {
        localStorage.setItem('user_id', '');
        setUser('');
        router.push('/')
    }

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-transparent/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="flex z-40 font-semibold">
                        <div className="flex">
                            <span className="text-indigo-600 text-6xl font-bold">B</span>
                            <div className="mt-1">
                                <p>etter</p>
                                <p>engaluru</p>
                            </div>
                        </div>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            {
                                pathname === '/auth/login' ||  user !== ''
                                ? null
                                : <div 
                                    className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), "bg-indigo-600")}
                                    onClick={() => router.push('/auth/login')}
                                > Login </div>
                            }
                            
                            <Link href="/home" className={cn( buttonVariants({ variant: "outline", size: 'lg' }), "bg-indigo-600") }> Home </Link>

                            {
                                user !== ''
                                ? <div 
                                    className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), "bg-indigo-600")}
                                    onClick={() => logoutHandler()}
                                    > Log Out </div>
                                : null
                            }
                            

                            {/* <div
                                className={buttonVariants({
                                    size: 'sm'
                                })}
                            >
                                Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
                            </div> */}
                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;