import { connect } from "mongoose";

export async function startConnection() {
    await connect("mongodb://localhost/manga-database", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database is connected");
    
}