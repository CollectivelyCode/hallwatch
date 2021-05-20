import { NextApiRequest, NextApiResponse } from 'next';
import * as mongoose from 'mongoose';
import Pass from '../../../lib/Pass';
import DBConnect from '../../../util/DBConnect'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await DBConnect()


    switch(req.method){
        case 'GET':
            try {
                const pass = await Pass.findById(id)
                if(!user){
                    return res.status(404).json({success: false, error: "Pass not found"})
                }
                res.status(200).json(pass)
                
            }

            catch (err){
                console.log(err)
                res.status(500).json({ success: false, error: "Internal Server Error"  })
            }
            break
    }
}