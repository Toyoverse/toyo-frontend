import { createSlice } from '@reduxjs/toolkit'

const modelSlice = createSlice({
    name: 'Main',
    initialState: {
        record: false,
        started: false,
        videoUploaded: false,
    },
    reducers: {
        startRecording: (state, action) => {
            state.record = true
        },
        setStarted: (state, action) => {
            state.started = true
        },
        setvideoUploaded: (state, action) => {
            state.videoUploaded = action.payload
        },
    },
})

export const { startRecording, setStarted, setvideoUploaded } =
    modelSlice.actions

export default modelSlice.reducer
