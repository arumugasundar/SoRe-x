import { NextApiRequest } from "next";
import { login } from "@/data/user";

const POST = async (request: NextApiRequest) => {
    let payload = await request.json();
    const { email, password } = payload;
    console.log('data :', email, password);
    const response = await login(email, password)
    return Response.json(response);
}

export { POST };