import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Component = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Investor</CardTitle>
            <CardDescription>Welcome to the world of bright ideas. An opportunity to fuel the passion in people.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
        <div className="space-y-1">
                <Label htmlFor="Name">Name</Label>
                <Input id="Name" defaultValue="" />
            </div>
        <div className="space-y-1">
                <Label htmlFor="Phone">Phone</Label>
                <Input id="Phone" defaultValue="" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="Email">Email</Label>
                <Input id="Email" defaultValue="" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="OTP">OTP</Label>
                <Input id="OTP" defaultValue="" />
            </div>
            <div className="flex justify-around">
                
            </div>
        </CardContent>
        <CardFooter className="w-full flex justify-around"> 
            <Button> LogIn </Button>
            <Button> Generate OTP </Button>
        </CardFooter>
    </Card>
  )
}

export default Component