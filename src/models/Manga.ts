import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    title: String,
    author: String,
    artist: String,
    description: String,
    gender: [
        {
            genderId: Number,
            genderName: String
        }
    ],
    mangaInfo: [
        {
            mangaInfoId: Number,
            mangaInfoName: String,
            mangaInfoLink: String
        }
    ],
    mangaRead: [
        {
            mangaReadId: Number,
            mangaReadName: String,
            mangaReadLink: String
        }
    ]
});

interface IManga extends Document {
    
}

export default model<IManga>("Manga", schema);
