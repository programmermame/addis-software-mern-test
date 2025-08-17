import { Request, Response } from "express";
import * as audiobookService from "../services/audiobookService";

export const create = async (req: Request, res: Response) => {
    try {
        const data = await audiobookService.createAudiobook(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message })
    }
}
export const getAll = async (_: Request, res: Response) => {
    try {
        const data = await audiobookService.getAllAudiobook();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message })
    }
}
export const update = async (req: Request, res: Response) => {
    try {
        const data = await audiobookService.updateAudiobook(req.params.id, req.body);
        if (!data) {
            return res.send(404).json({ message: "Audiobook not found" })
        }
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message })
    }
}
export const remove = async (req: Request, res: Response) => {
    try {
        const data = await audiobookService.deleteAudiobook(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Audiobook not found" })
        };
        res.json({ message: "Audiobook deleted" })
    } catch (err) {
        return res.status(400).json({ error: (err as Error).message })
    }
}
export const stats = async (_: Request, res: Response) => {
    try {
        const statistics = await audiobookService.getStats();
        res.json(statistics);
    } catch (err) {
        res.json({ error: (err as Error).message })
    }
}