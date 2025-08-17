import { IAudiobook } from "../types/audiobook";
import AudiobookModel from "../models/audiobookModel";
import { Request, Response } from "express";

export const createAudiobook = async (data: Partial<IAudiobook>) => {
    const audiobook = new AudiobookModel(data);
    return audiobook.save();

}
export const getAllAudiobook = async () => {
    return AudiobookModel.find();
}
export const updateAudiobook = async (id: string, data: Partial<IAudiobook>) => {
    return AudiobookModel.findByIdAndUpdate(id, data, { new: true })
}
export const deleteAudiobook = async (id: string) => {
    return AudiobookModel.findByIdAndDelete(id);
}
export const getStats = async () => {
    const totalAudiobooks = await AudiobookModel.countDocuments();
    const totalNarrators = await AudiobookModel.distinct('narrator');
    const totalSeries = await AudiobookModel.distinct('series');
    const totalCategories = await AudiobookModel.distinct('category');

    const categories = await AudiobookModel.aggregate([
        { $group: { _id: '$category', count: { $sum: 1 } } },
    ]);
    const narrators = await AudiobookModel.aggregate([
        { $group: { _id: '$narrator', count: { $sum: 1 } } }
    ]);
    const series = await AudiobookModel.aggregate([
        { $group: { _id: '$series', count: { $sum: 1 } } }
    ])

    const seriesPerNarrator = await AudiobookModel.aggregate([
        { $group: { _id: '$narrator', uniqueSeries: { $addToSet: '$series' } } },
        { $project: { narrator: '$_id', _id: 0, seriesCount: { $size: '$uniqueSeries' } } }
    ])


    return {
        totalAudiobooks,
        totalCategories: totalCategories.length,
        totalNarrators: totalNarrators.length,
        totalSeries: totalSeries.length,
        categories,
        narrators,
        series,
        seriesPerNarrator
    }
}