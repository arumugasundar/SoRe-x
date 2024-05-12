import { NextApiRequest } from "next";
import { sendOtp } from "@/data/otp";

const POST = async (request: Request) => {
    let payload = await request.json();
    const { type, value } = payload;
    const response = await sendOtp(type, value);
    return Response.json(response)
}

export { POST };