import { db } from "@/lib/db";
import { getOTPbyPhone, getOTPbyEmail } from "./otp";

export const getUsers = async () => {
    try {
        const user = await db.user.findMany();
        return user;
    } catch (error) {
        console.log('error :', error?.toString());
        return null;
    }
}

export const createUser = async ( name: String, gender: String, age: String, email: String, email_otp: String, phone: String, phone_otp: String, password: String, confirmPassword: String ) => {
    try {
        let phone_otp_in_db = await getOTPbyPhone(phone);
        let email_otp_in_db = await getOTPbyEmail(email);
        
        if(password === confirmPassword && phone_otp === phone_otp_in_db && email_otp === email_otp_in_db){
            const res = await db.user.create({ data : { name, gender, age, email, phone, password, active: true }})
            return res;
        }
        return null;
        
    } catch (error) {
        console.log('error :', error?.toString());
        return null;
    }
}

export const login = async (email: String, password: String) => {
    try {
        const res = await db.user.findFirst({where : { email, password}})
        console.log('res :', res);
        return res;
    } catch (error) {
        console.log('error :', error?.toString())
        return null;
    }
}