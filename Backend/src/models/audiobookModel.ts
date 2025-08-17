import { IAudiobook } from "../types/audiobook";
import mongoose, { Schema } from "mongoose";

const AudiobookSchema: Schema = new Schema<IAudiobook>(
    {
        title: { type: String, required: true },
        narrator: { type: String, required: true },
        series: { type: String, required: true },
        category: { type: String, required: true }
    },
    { timestamps: true }
)

const AudiobookModel = mongoose.model<IAudiobook>('Audiobook', AudiobookSchema)

export default AudiobookModel;