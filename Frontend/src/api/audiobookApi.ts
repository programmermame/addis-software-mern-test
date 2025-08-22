// src/api/audiobookApi.ts
import axios from "axios";
import type { IAudiobook, IStats } from "../types/audiobook";

const API_BASE = "http://localhost:5000/api/audiobooks";

export const createAudiobook = async (data: Partial<IAudiobook>): Promise<IAudiobook> => {
  const response = await axios.post<IAudiobook>(`${API_BASE}/create`, data);
  return response.data;
};


export const getAllAudiobooks = async (): Promise<IAudiobook[]> => {
  const response = await axios.get<IAudiobook[]>(`${API_BASE}`);
  return response.data;
};

export const updateAudiobook = async (id: string, data: Partial<IAudiobook>): Promise<IAudiobook> => {
  const response = await axios.put<IAudiobook>(`${API_BASE}/${id}`, data);
  return response.data;
};

export const deleteAudiobook = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE}/${id}`);
};

export const getStats = async (): Promise<IStats> => {
  const response = await axios.get<IStats>(`${API_BASE}/stats`);
  return response.data;
};
