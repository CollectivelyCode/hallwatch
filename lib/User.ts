import BaseUser from './BaseUser';
import PermissionLevel from './PermissionLevel';
import mongoose from 'mongoose';
import Pass from './Pass'
import * as pino from 'pino';

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
    name: { type: String, requried: true},
    email: { type: String, requried: true},
    image: { type: String, requried: true},
    createdAt: String,
    updatedAt: String,
    passId: mongoose.ObjectId,
    permissionLevel: Number,
    studentData: StudentDataSchema,
    teacherData: TeacherDataSchema
})

UserSchema.method('createPass', function(data){
    if (this.studentData || this.permissionLevel >= 1){
        const pass = Pass.create(data, function(err, document){
            if (err){
                logger.error(`Error caught: ${err}`)
            }
            logger.info(`User with ID ${this.id} created pass with id ${document.id}`)
        })
        this.updateOne({"passId": document.id})
    }
})

export default mongoose.models.User || mongoose.model('user', UserSchema)