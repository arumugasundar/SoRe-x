import { getUsers } from "@/data/user";

const GET = async () => {
    const response = await getUsers();
    return Response.json(response)
}

export { GET };