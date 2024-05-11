import Link from "next/link"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "./ui/button";
// import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
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
                            <Link href="/#" className={cn( buttonVariants({
                                variant: "outline",
                                size: 'lg'
                            }), "bg-indigo-600") }> Home </Link>

                            {/* <div
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm'
                                })}
                            >
                                Login / Register
                            </div>

                            <div
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