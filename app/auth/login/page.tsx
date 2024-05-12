"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async () => {
    if (email && password) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({ "email": "bob@gmail.com", "password": "password" });
      const requestOptions: any = { method: "POST", headers: myHeaders, body: raw, redirect: "follow" };
      
      let res: any = await fetch("/api/login", requestOptions)
      res = await res.json();
      if(res?.id){
        localStorage.setItem("user_id", res?.id);
        router.push('/home');
      } else {
        toast("invalid creds", { className: "toast-error" });
      }
  
    } else {
      toast("invalid inputs", { className: "toast-error" });
    }
  };

  return (
    <section className="flex justify-center m-2 p-2 mt-24">
      <Card className="bg-zinc-700/75">
        <CardHeader>
          <CardTitle className="flex justify-center">
            Already have an account?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-around">
          <div className="w-full m-1 p-1">
            <Label htmlFor="email"> Email </Label>
            <Input
              type="email"
              className="shadow-lg border-2 border-indigo-600"
              id="name"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
          </div>

          <div className="w-full m-1 p-1">
            <Label htmlFor="password"> Password </Label>
            <Input
              type={showPassword ? "text" : "password"}
              className="shadow-lg border-2 border-indigo-600"
              id="password"
              value={password}
              suffix={
                showPassword ? (
                  <EyeIcon
                    className="select-none cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOffIcon
                    className="select-none cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )
              }
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="w-full flex justify-end">
          <Button
            className="bg-indigo-600 text-white"
            onClick={async () => await submitHandler()}
          >
            Log In
          </Button>
        </CardFooter>
        <Toaster />
      </Card>
    </section>
  );
};

export default Page;
