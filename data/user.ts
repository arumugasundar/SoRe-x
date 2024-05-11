import { db } from "@/lib/db";

export const getUsers = async () => {
    try{
        const user = await db.user.findMany();
        return user;
    } catch {
        return null;
    }
}