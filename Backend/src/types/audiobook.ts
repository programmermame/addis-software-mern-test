import { Document } from "mongoose";

export interface IAudiobook extends Document {
    title: string,
    narrator: string,
    series: string,
    category: string
}