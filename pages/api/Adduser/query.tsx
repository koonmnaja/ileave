import axios from "axios"
import dotenv from "dotenv"
import cookies from "next-cookie";
dotenv.config()

const Queryuser = async(req:any,res:any) => {
    const user = JSON.parse(req?.cookies?.user)
    const result = await axios({
        method: 'get',
        url: `${process.env.BACK_END_URL}/User`,
        headers: { 
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        },
        data: req?.body
    }).catch((err) => {
        res.status(500).json({
            success: false,
            data: {},
            message: err
        })
    })
    res.status(200).json({
        success: true,
        data: result?.config?.data,
    })
}

export default Queryuser