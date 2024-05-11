import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Component = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle> Card Title </CardTitle>
            <CardDescription> tagline - to express the willingness to point out societal issues </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
            </div>
            <div className="flex justify-around">
                
            </div>
        </CardContent>
        <CardFooter> 
            <Button> LogIn </Button>
            <Button> SignUp </Button>
        </CardFooter>
    </Card>
  )
}

export default Component