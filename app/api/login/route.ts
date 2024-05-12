import { NextApiRequest } from "next";
import { login } from "@/data/user";

const POST = async (request: Request) => {
    let payload = await request.json();
    const { email, password } = payload;
    const response = await login(email, password)
    return Response.json(response);
}

export { POST };