import mongoose from "mongoose";

const connectBD = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        // console.log(conn);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectBD;