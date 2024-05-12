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
            <Button variant="outline" size={"lg"} className="bg-indigo-600 text-white text-2xl mx-auto mt-44"> <Plus size={40} /> Report Issue </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[540px] overflow-auto">
        <DialogHeader>
          <DialogTitle> Issue Report </DialogTitle>
          <DialogDescription className="mt-2"> tagline - to convey the expectations of how the issue reporting should be </DialogDescription>
        </DialogHeader>

        <div className="flex w-full gap-2">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-indigo-600 p-1 m-1 rounded-sm"> {place} </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setPlace('Bengaluru Urban')}> Bengaluru Urban </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setPlace('Bengaluru Rural')}> Bengaluru Rural </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-indigo-600 p-1 m-1 rounded-sm"> {locality} </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLocality('Koramangala')}> Koramangala </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocality('Indiranagar')}> Indiranagar </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        



        <div className="flex flex-wrap justify-around">
        <div className="w-5/12 m-1 p-1">
            <Label htmlFor="image"> Upload Image </Label>
            <Input
              type="file"
              className="shadow-lg border-2 border-indigo-600"
              id="image"
            />
          </div>

        <div className="w-5/12 m-1 p-1">
            <Label htmlFor="description"> Description </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="description"
              value={description}
              onChange={(e) => setDescription(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="department"> Department </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="severity"> Severity </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="severity_reason"> severity Reason </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="severity_reason"
              value={severityReason}
              onChange={(e) => setSeverityReason(e?.target?.value)}
            />
          </div>

          <div className="w-5/12 m-1 p-1">
            <Label htmlFor="issue_persists_since"> Issue Persists Since </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="issue_persists_since"
              value={issuePersistsSince}
              onChange={(e) => setIssuePersistsSince(e?.target?.value)}
            />
          </div>

          <div className="w-11/12 m-1 p-1">
            <Label htmlFor="add_location"> Add Location </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="add_location"
              value={addLocation}
              onChange={(e) => setAddLocation(e?.target?.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" className="bg-indigo-600 text-white">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Component