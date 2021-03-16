import { Schema, model, Document } from 'mongoose';

const artistSchema = new Schema(
    {
        name: { type: String, require: true },
        lname: { type: String, require: true },
        country: { type: String, require: false },
        bday: { type: Date, require: false }
    },
    {
        timestamps: true
    }
);

export interface IArtist extends Document {
    name: string;
    lname: string;
    country: string;
    bday: Date;
}

export default model<IArtist>('Artist', artistSchema);
