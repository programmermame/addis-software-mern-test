/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/audiobook/audiobookSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAudiobook, IStats } from "../../types/audiobook";

interface AudiobookState {
  audiobooks: IAudiobook[];
  stats: IStats | null;
  loading: boolean;
  error: string | null;
}

const initialState: AudiobookState = {
  audiobooks: [],
  stats: null,
  loading: false,
  error: null,
};

const audiobookSlice = createSlice({
  name: "audiobook",
  initialState,
  reducers: {
    // Load all audiobooks
    fetchAudiobooksRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAudiobooksSuccess(state, action: PayloadAction<IAudiobook[]>) {
      state.audiobooks = action.payload;
      state.loading = false;
    },
    fetchAudiobooksFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // Stats
    fetchStatsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStatsSuccess(state, action: PayloadAction<IStats>) {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // CRUD actions
    addAudiobookRequest(state, _action: PayloadAction<Partial<IAudiobook>>) {
      state.loading = true;
      state.error = null;
    },
    addAudiobookSuccess(state, action: PayloadAction<IAudiobook>) {
      state.audiobooks.push(action.payload);
      state.loading = false;
    },
    addAudiobookFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    updateAudiobookRequest(state, _action: PayloadAction<{ id: string; data: Partial<IAudiobook> }>) {
      state.loading = true;
      state.error = null;
    },
    updateAudiobookSuccess(state, action: PayloadAction<IAudiobook>) {
      const index = state.audiobooks.findIndex(a => a._id === action.payload._id);
      if (index !== -1) state.audiobooks[index] = action.payload;
      state.loading = false;
    },
    updateAudiobookFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    deleteAudiobookRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteAudiobookSuccess(state, action: PayloadAction<string>) {
      state.audiobooks = state.audiobooks.filter(a => a._id !== action.payload);
      state.loading = false;
    },
    deleteAudiobookFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchAudiobooksRequest,
  fetchAudiobooksSuccess,
  fetchAudiobooksFailure,
  fetchStatsRequest,
  fetchStatsSuccess,
  fetchStatsFailure,
  addAudiobookRequest,
  addAudiobookSuccess,
  addAudiobookFailure,
  updateAudiobookRequest,
  updateAudiobookSuccess,
  updateAudiobookFailure,
  deleteAudiobookRequest,
  deleteAudiobookSuccess,
  deleteAudiobookFailure,
} = audiobookSlice.actions;

export default audiobookSlice.reducer;
