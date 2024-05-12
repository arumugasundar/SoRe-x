import { db } from "@/lib/db";

export const sendOtp = async (type: string, value: string) => {
    try {
        console.log('reached')
        const min = 100000;
        const max = 999999;
        const otp = Math.floor(Math.random() * (max - min + 1)) + min;
        const res = await db.OTP.create({ data : {type, value, otp:`${otp}` }})
        console.log('res :', res);
        return res
    } catch (error) {
        console.log('error :', error?.toString())
        return null;
    }
}

export const getOTPbyPhone = async (phone: String) => {
    try {
        const res = await db.OTP.findFirst({ where : { type : "phone", value : `${phone}`}})
        return res?.otp ?? '';
    } catch (error) {
        console.log('error :', error?.toString())
        return null;
    }
}

export const getOTPbyEmail = async (email: String) => {
    try {
        const res = await db.OTP.findFirst({ where : { type : "email", value : `${email}`}})
        return res?.otp ?? '';
    } catch (error) {
        console.log('error :', error?.toString())
        return null;
    }
}