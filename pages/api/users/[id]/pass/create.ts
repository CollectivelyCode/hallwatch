import { NextApiRequest, NextApiResponse } from 'next';
import * as mongoose from 'mongoose';
import User from '../../../../../lib/User';
import DBConnect from '../../../../../util/DBConnect'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await DBConnect()


    switch(req.method){
        case 'POST':
            try {
                const user = await User.findById(id)
                if(!user){
                    return res.status(404).json({success: false, error: "User not found"})
                }

                // @ts-ignore
                const params = new URLSearchParams(process.env.BASE_URL + req.url).searchParams


                user.createPass(req.body)
                res.status(200).json({success: true, data: user.pass})

            }

            catch (err){
                console.log(err)
                res.status(500).json({ success: false, error: "Internal Server Error"  })
            }
            break
    }
}
