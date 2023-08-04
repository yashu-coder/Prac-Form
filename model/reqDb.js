import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        name: {
            type: String
        },
        
        phone: {
            type: Number
        },
        address: {
            type: String
        },
        state: {
            type: String
        },
    },
    {timestamps: true}
)

export default mongoose.model('User',schema);