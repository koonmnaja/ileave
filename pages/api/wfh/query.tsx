import axios from "axios"
import dotenv from "dotenv"
dotenv.config()
const QueryTable = async(req:any,res:any) => {
 
    const result = await axios({
        method: 'get',
        url: `http://localhost:4000/table`,
        headers: { 
           
        },
        data: req?.body
    }).catch((err) => {
        console.log("error :", err)
        res.status(500).json({
            success: false,
            data: {},
            message: err
        })
    })
    console.log('result=========>',result?.data)
    res.status(200).json({
        success: true,
        data: result?.config?.data
    })
}
 

export default QueryTable