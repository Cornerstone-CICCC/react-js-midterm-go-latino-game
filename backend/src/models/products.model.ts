import mongoose , {Schema, Document } from "mongoose"

export interface Iproduct extends Document{
    id:number;
    name:string;
    price:number;
    description:string;
    size:string[];
    image:string;
    stock:number;
    category:string;

}

const ProductSchema: Schema= new Schema({
    id: {
        type: Number,
        required:false
    }, 
    name:{
        type: String,
        required: true 

    },
    price:{
        type:Number,
        required:true

    },
    description:
    {
        type: String,
        required: true
    },
    size:{
        type:[],
        required:true,

    },
    image:{
        type:String,
        required:true
    },

    stock:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },

    })





   

    export const Product = mongoose.model<Iproduct>('Product', ProductSchema)