import { Request } from "express"

export default interface User {
    username: string
    password: string
    email: string
    phone: string
    isAdmin: boolean
    wishList: string[]
}

export interface CustomRequest extends Request {
    user: User
}