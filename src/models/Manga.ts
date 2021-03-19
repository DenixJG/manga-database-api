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
        links: [{ type: String, require: false }],
        genders: [{ type: String, require: false }],
        description: { type: String, required: true },
        mangaImagePath: { type: String, default: defaults.mangaImage, required: true }
    },
    {
        timestamps: true
    }
);

export interface IManga extends Document {
    title: string;
    author: string;
    artists: Array<String>;
    links: Array<String>;
    genders: Array<String>;
    description: string;
    mangaImagePath: string;
}

export default model<IManga>('Manga', mangaSchema);
