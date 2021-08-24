import { PermissionLevel } from './';
import Pass from "./Pass";
interface BaseUser {
    name: string
    email: string
    image: string
    permissionLevel?: PermissionLevel
    createdAt: string
    updatedAt: string
    studentData?: {

    }
    createPass(data: Object):
}

export default BaseUser
