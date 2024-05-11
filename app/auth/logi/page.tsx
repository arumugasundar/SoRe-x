import { Button } from "@/components/ui/button"
import Public from "@/app/auth/logi/_components/public";
import Government from "@/app/auth/logi/_components/government";
import Entreprenuer from "@/app/auth/logi/_components/entrepreneur";
import Investor from "@/app/auth/logi/_components/investor";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Page = () => {
  return (
    <section className="flex justify-center m-2 p-2 mt-24">
        <Tabs defaultValue="public" className="w-[800px]">
            <TabsList className="grid w-full grid-cols-4 bg-indigo-600 h-18">
                <TabsTrigger value="public">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" fill="currentColor"/><path fill="currentColor" d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54C8.24 6.99 6 4.75 6 2H4c0 3.16 2.11 5.84 5 6.71V22h2v-6h2v6h2V10.05L18.95 14l1.41-1.41z"/></svg>
                        <span className="ml-2 text-base"> Public </span>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="government"> 
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 2h-3.75a.75.75 0 0 0-.75.75v3.32A7 7 0 0 0 5 13h-.75A2.25 2.25 0 0 0 2 15.25v6c0 .414.336.75.75.75H10a.25.25 0 0 0 .25-.25v-3a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5v3c0 .138.112.25.25.25h7.25a.75.75 0 0 0 .75-.75v-6A2.25 2.25 0 0 0 19.75 13H19a7 7 0 0 0-6.5-6.982V5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5m0 9.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0M11.75 11a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-2.25.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0M5.75 15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m13.25.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0"/></svg>
                        <span className="ml-2 text-base"> Government </span>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="entrepreneur">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4"/><path fill="currentColor" d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
                        <span className="ml-2 text-base"> Entrepreneur </span>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="investor"> 
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34.09-10.85-69.29-22.1-118 1.68A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M48 152a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm80 8a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 8a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></svg>
                        <span className="ml-2 text-base"> Investor </span>
                    </div>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="public"> <Public /> </TabsContent>
            <TabsContent value="government"> <Government /> </TabsContent>
            <TabsContent value="entrepreneur"> <Entreprenuer /> </TabsContent>
            <TabsContent value="investor"> <Investor /> </TabsContent>
        </Tabs>
    </section>
  )
}

export default Page;
