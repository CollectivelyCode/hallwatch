import { PermissionLevel } from './';
interface BaseUser {
    name: string
    email: string
    image: string
    permissionLevel?: PermissionLevel
    createdAt: string
    updatedAt: string
    studentData?: {
        
    }
}

export default BaseUser