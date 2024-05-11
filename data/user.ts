import { db } from "@/lib/db";

export const getUsers = async () => {
    try{
        const user = await db.user.findMany();
        console.log('user :', user)
        return user;
    } catch {
        return null;
    }
}