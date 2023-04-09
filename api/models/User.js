import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
          
           
        },
        email: {
            type: String,
         
        },
        // country: {
        //   type: String,
        //   required: true,
        // },
        // img: {
        //   type: String,
        // },
        // city: {
        //   type: String,
        //   required: true,
        // },
        // phone: {
        //   type: String,
        //   required: true,
        // },
        password: {
            type: String,
           
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);
