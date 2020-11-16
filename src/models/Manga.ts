import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    title: String,
    author: String,
    artist: String,
    mangaImagePath: String,
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
    title: string,
    author: string,
    artist: string,
    mangaImagePath: string,
    description: string,
    gender: [
        {
            genderId: number,
            genderName: string
        }
    ],
    mangaInfo: [
        {
            mangaInfoId: number,
            mangaInfoName: string,
            mangaInfoLink: string
        }
    ],
    mangaRead: [
        {
            mangaReadId: number,
            mangaReadName: string,
            mangaReadLink: string
        }
    ]
}

export default model<IManga>("Manga", schema);
