import mongoose from 'mongoose';


interface Pass{
    location: String
    student: Object
    teacher: Object
    timeCreated: String

}

const PassSchema = new mongoose.Schema<Pass>({
    location: String,
    student: Object,
    teacher: Object,
    timeCreated: String,
})


export default mongoose.models.Pass || mongoose.model('Pass', PassSchema)
