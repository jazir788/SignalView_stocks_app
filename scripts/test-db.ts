import { connectToDatabase } from "../database/mongoose";

async function main() {
    try {
        await connectToDatabase()
        console.log("OK: Database connected")
        process.exit(0)
    } catch (error) {
        console.error("ERROR: Database not connected")
        console.error(error)
        process.exit(1)
        
    }
}

main()