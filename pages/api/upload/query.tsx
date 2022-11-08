import axios from "axios"
import dotenv from "dotenv"
import cookies from "next-cookies";
dotenv.config

const QueryUpload = async(req:any, res:any) => {
    const upload = JSON.parse(req?.cookies?.upload)
    console.log("upload >>> ", req)
    const result = await axios({
        method: 'post',
        url: `${process.env.BACK_END_URL}/upload`,
        headers: { 
            'Authorization': "",
            'Content-Type': 'application/json'
        },
        data: req?.basis
    }).catch((err) => {
        console.log("error :", err)
        res.status(500).json({
            success: false,
            data: {},
            message: err
        })
    })
    res.status(200).json({
        success: true,
        data: result?.data?.result,
    })
}
export default QueryUpload