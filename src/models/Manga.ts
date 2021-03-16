import { Schema, model, Document } from 'mongoose';
import { defaults } from '../conf/manga-config.json';

const mangaSchema = new Schema(
    {
        title: { type: String, require: true },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Author'
        },
        artists: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Artist'
            }
        ],
        mangaImagePath: { type: String, default: defaults.mangaImage, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export interface IManga extends Document {
    title: string;
    author: string;
    artists: Array<String>;
    mangaImagePath: string;
    description: string;
}

export default model<IManga>('Manga', mangaSchema);
