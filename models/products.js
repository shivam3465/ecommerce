import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    }
})

export const Product=mongoose.model('Product',productSchema);