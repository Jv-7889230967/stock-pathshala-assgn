import axios from "axios";

export const generateOTP=async(username)=>{
    try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}/login-register`, {
            user_name: username,
            hash_code: process.env.REACT_APP_HASH_CODE,
          });
    } catch (error) {
        return error;
    }
}