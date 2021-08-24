import BaseUser from './BaseUser';
import mongoose from 'mongoose';
import Pass from './Pass'
import pino from 'pino';

const logger = pino({
    name: "UserService",
    level: "info"
})


const StudentDataSchema: mongoose.Schema = new mongoose.Schema({
    maxPasses: Number,
})


const TeacherDataSchema: mongoose.Schema = new mongoose.Schema({
    location: mongoose.ObjectId
})


const UserSchema: mongoose.Schema = new mongoose.Schema<BaseUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String, required: true},
    createdAt: String,
    updatedAt: String,
    passId: mongoose.ObjectId,
    permissionLevel: Number,
    studentData: StudentDataSchema,
    teacherData: TeacherDataSchema
})

UserSchema.method('createPass', function (data) {
    const pass = new Pass(data)
    pass.save((err: Error) => {
        if (err) {
            logger.error(`Error caught: ${err}`)
            throw err
        }
        logger.info(`User with ID ${this.id} created pass with id ${document._id}`)
        mongoose.model('User').updateOne({"passId": pass._id})
    })

})

export default mongoose.models.User || mongoose.model('user', UserSchema)
