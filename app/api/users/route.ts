import { NextApiRequest } from "next";
import { getUsers, createUser } from "@/data/user";

const GET = async () => {
    const response = await getUsers();
    return Response.json(response)
}

const POST = async (request: NextApiRequest) => {
    let payload = await request.json();
    const { name, gender, age, email, emailOtp, phone, phoneOtp, password, confirmPassword, userType  } = payload;
    const response = await createUser(name, gender, age, email, emailOtp, phone, phoneOtp, password, confirmPassword, userType)
    return Response.json(response);
}

export { GET, POST };