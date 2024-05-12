"use client";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'
import { useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Component = () => {

    const [ description, setDescription ] = useState('');
    const [ department, setDepartment ] = useState('');
    const [ severity, setSeverity ] = useState('');
    const [ severityReason, setSeverityReason ] = useState('');
    const [ issuePersistsSince, setIssuePersistsSince ] = useState('');
    const [ addLocation, setAddLocation ] = useState('');

    const [place, setPlace ] = useState('Select Place');
    const [locality, setLocality ] = useState('Select Locality');
    // const [locality, setLocality ] = useState('Select Locality');
    // const [locality, setLocality ] = useState('Select Locality');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full flex justify-end">
            <Button variant="outline" size={"lg"} className="bg-indigo-600 text-white text-2xl mx-auto mt-44"> <Plus size={40} /> Submit Ideas </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[540px] overflow-auto">
        <DialogHeader>
          <DialogTitle> Fuel your passion </DialogTitle>
          <DialogDescription className="mt-2"> To describe a bit on idea you wish to pitch </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap justify-around">

        <div className="w-5/12 m-1 p-1">
            <Label htmlFor="description"> Is the idea already funded? </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="description"
              value={description}
              placeholder="yes or no"
              onChange={(e) => setDescription(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="department"> Problem Statement </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="severity"> Description of Solution </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="severity_reason"> Why should we fund you? </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="severity_reason"
              value={severityReason}
              onChange={(e) => setSeverityReason(e?.target?.value)}
            />
          </div>

          <div className="w-11/12 m-1 p-1">
            <Label htmlFor="image"> Upload Files (if any) </Label>
            <Input
              type="file"
              className="shadow-lg border-2 border-indigo-600"
              id="image"
            />
          </div>
          

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="add_location"> Connect with me/us (to be filled by investors) </Label>

            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="add_location"
              value={addLocation}
              suffix={<Button type="button" className="bg-indigo-600 text-white p-2"> Connect</Button>}
              placeholder="I am interested in this idea"
              onChange={(e) => setAddLocation(e?.target?.value)}
            />
          </div>
        </div>

        <DialogFooter className="w-full flex justify-between">
          <Button type="submit" className="bg-indigo-600 text-white">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Component