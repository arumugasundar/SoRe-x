"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon, PhoneIcon } from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

const Component = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [userType, setUserType] = useState("public");

  const sendOtp = async (type: string, value: string) => {
    
    if (type && value) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({ "type": `${type}`, "value": `${value}`});
      const requestOptions: any = { method: "POST", headers: myHeaders, body: raw, redirect: "follow" }; 
      await fetch("/api/otp", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      toast("otp sent to your email.", { className: "toast-success" });
    } else {
      toast("oops! something went wrong.", { className: "toast-error" });
    }
  };

  const submitHandler = async () => {
    
    if(name && gender && age && email && emailOtp && phone && phoneOtp && password && confirmPassword && userType){
      let payload = { name, gender, age, email, emailOtp, phone, phoneOtp, password, confirmPassword, userType };
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify(payload);
      const requestOptions: any = { method: "POST", headers: myHeaders, body: raw, redirect: "follow" };

      let response: any = await fetch("/api/users", requestOptions);
      response = await response.json();
      
      if(response?.id){
        router.push('/auth/login');
      }
    } else {
      toast("invalid data found", { className: "toast-error" });
    }
  };

  return (
    <Card className="bg-zinc-700/75">
      <CardHeader>
        <CardTitle> Public </CardTitle>
        <CardDescription>
          Be a responsible citizen. Dive into this section to report any
          critical issue that needs to be addressed.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-around">
        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="name"> Name </Label>
          <Input
            type="text"
            className="shadow-lg border-2 border-indigo-600"
            id="name"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
          />
        </div>
        <div className="w-3/12 m-1 p-1">
          <Label htmlFor="gender"> Gender </Label>
          <Input
            type="text"
            className="shadow-lg border-2 border-indigo-600"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e?.target?.value)}
          />
        </div>
        <div className="w-3/12 m-1 p-1">
          <Label htmlFor="age"> Age </Label>
          <Input
            type="text"
            className="shadow-lg border-2 border-indigo-600"
            id="age"
            value={age}
            onChange={(e) => setAge(e?.target?.value)}
          />
        </div>

        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="email"> Email </Label>
          <Input
            type="email"
            className="shadow-lg border-2 border-indigo-600"
            id="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            suffix={
              <MailIcon
                className="cursor-pointer"
                onClick={async () => await sendOtp("email", email)}
              />
            }
          />
        </div>
        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="email_otp"> Email Verification OTP </Label>
          <Input
            type="text"
            className="shadow-lg border-2 border-indigo-600"
            id="email_otp"
            value={emailOtp}
            onChange={(e) => setEmailOtp(e?.target?.value)}
          />
        </div>

        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="phone"> Phone </Label>
          <Input
            type="text"
            className="shadow-lg border-2 border-indigo-600"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e?.target?.value)}
            suffix={
              <PhoneIcon
                className="cursor-pointer"
                onClick={async () => await sendOtp("phone", phone)}
              />
            }
          />
        </div>
        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="phone_otp"> Phone Verification OTP </Label>
          <Input
            type="text"
            className="shadow-lg border-2 border-indigo-600"
            id="phone_otp"
            value={phoneOtp}
            onChange={(e) => setPhoneOtp(e?.target?.value)}
          />
        </div>
        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="password"> Password </Label>
          <Input
            className="shadow-lg border-2 border-indigo-600"
            type={showPassword ? "text" : "password"}
            id="password"
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
            value={password}
            onChange={(e) => setPassword(e?.target?.value)}
          />
        </div>
        <div className="w-5/12 m-1 p-1">
          <Label htmlFor="password"> Confirm Password </Label>
          <Input
            className="shadow-lg border-2 border-indigo-600"
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            suffix={
              showConfirmPassword ? (
                <EyeIcon
                  className="select-none cursor-pointer"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <EyeOffIcon
                  className="select-none cursor-pointer"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )
            }
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e?.target?.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-end">
        <Button className="bg-indigo-600 text-white" onClick={async () => await submitHandler()}> Register </Button>
      </CardFooter>
      <Toaster />
    </Card>
  );
};

export default Component;
