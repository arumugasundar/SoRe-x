"use client";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'
import { useState } from "react"

const Component = () => {

    const [ description, setDescription ] = useState('');
    const [ department, setDepartment ] = useState('');
    const [ severity, setSeverity ] = useState('');
    const [ severityReason, setSeverityReason ] = useState('');
    const [ issuePersistsSince, setIssuePersistsSince ] = useState('');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full flex justify-end">
            <Button variant="outline" className="bg-indigo-600 text-white text-base m-4 p-2"> <Plus size={20} /> Report Issue </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Issue Report </DialogTitle>
          <DialogDescription> tagline - to convey the expectations of how the issue reporting should be </DialogDescription>
        </DialogHeader>

        <div className="w-full m-1 p-1">
            <Label htmlFor="description"> Description </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="description"
              value={description}
              onChange={(e) => setDescription(e?.target?.value)}
            />
          </div>

          <div className="w-full m-1 p-1">
            <Label htmlFor="department"> Department </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e?.target?.value)}
            />
          </div>

          <div className="w-full m-1 p-1">
            <Label htmlFor="severity"> Severity </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e?.target?.value)}
            />
          </div>

          <div className="w-full m-1 p-1">
            <Label htmlFor="severity_reason"> severity Reason </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="severity_reason"
              value={severityReason}
              onChange={(e) => setSeverityReason(e?.target?.value)}
            />
          </div>

          <div className="w-full m-1 p-1">
            <Label htmlFor="issue_persists_since"> Issue Persists Since </Label>
            <Input
              type="text"
              className="shadow-lg border-2 border-indigo-600"
              id="issue_persists_since"
              value={issuePersistsSince}
              onChange={(e) => setIssuePersistsSince(e?.target?.value)}
            />
          </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Component