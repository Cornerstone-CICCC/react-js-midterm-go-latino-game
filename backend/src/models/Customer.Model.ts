import mongoose, { Document, Schema } from "mongoose";

export interface ICustomer extends Document {
    firstname: string
    lastname: string
    age: number
    email: string
    password: string
}

const CustomerSchema: Schema = new Schema ({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema)
