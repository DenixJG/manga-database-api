import { Schema, model, Document } from "mongoose";
import { defaults } from "../conf/manga-config.json";

const schema = new Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    artist: {type: String, require: true},
    mangaImagePath: {type: String, default: defaults.mangaImage, required: true},
    description: {type: String, required: true},
    createdAt: { type: Date, default: Date.now() }
});

export interface IManga extends Document {
    title: string,
    author: string,
    artist: string,
    mangaImagePath: string,
    description: string,
}

export default model<IManga>("Manga", schema);
