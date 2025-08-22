import { call, put, takeEvery, all } from "redux-saga/effects";
import * as api from "../../api/audiobookApi";
import * as actions from "./audiobookSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAudiobook } from "../../types/audiobook";
import type { SagaIterator } from "redux-saga";

function* fetchAudiobooks() {
    try {
        const data: IAudiobook[] = yield call(api.getAllAudiobooks);
        yield put(actions.fetchAudiobooksSuccess(data));
    } catch (err) {
        yield put(actions.fetchAudiobooksFailure((err as Error).message));
    }
}


function* fetchStats(): SagaIterator {
    try {
        const data = yield call(api.getStats);
        yield put(actions.fetchStatsSuccess(data));
    } catch (err) {
        yield put(actions.fetchStatsFailure((err as Error).message));
    }
}

function* addAudiobook(action: PayloadAction<Partial<IAudiobook>>): SagaIterator {
    try {
        const data = yield call(api.createAudiobook, action.payload);
        yield put(actions.addAudiobookSuccess(data));
    } catch (err) {
        yield put(actions.addAudiobookFailure((err as Error).message));
    }
}
function* updateAudiobook(action: PayloadAction<{ id: string; data: Partial<IAudiobook> }>): SagaIterator {
    try {
        const data = yield call(api.updateAudiobook, action.payload.id, action.payload.data);
        yield put(actions.updateAudiobookSuccess(data));
    } catch (err) {
        yield put(actions.updateAudiobookFailure((err as Error).message));
    }
}

function* deleteAudiobook(action: PayloadAction<string>) {
    try {
        yield call(api.deleteAudiobook, action.payload);
        yield put(actions.deleteAudiobookSuccess(action.payload));
    } catch (err) {
        yield put(actions.deleteAudiobookFailure((err as Error).message));
    }
}

export default function* audiobookSaga() {
    yield all([
        //takeEvery( ActionType , *generatorFunction)
        takeEvery(actions.fetchAudiobooksRequest.type, fetchAudiobooks),
        takeEvery(actions.fetchStatsRequest.type, fetchStats),
        takeEvery(actions.addAudiobookRequest.type, addAudiobook),
        takeEvery(actions.updateAudiobookRequest.type, updateAudiobook),
        takeEvery(actions.deleteAudiobookRequest.type, deleteAudiobook),
    ]);
}
