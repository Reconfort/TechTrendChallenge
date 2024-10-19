import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepState {
    currentStep: number;
    totalSteps: number;
}

const initialState: StepState = {
    currentStep: 1,
    totalSteps: 10, // assuming you want 10 steps in the app
};

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.currentStep < state.totalSteps) {
                state.currentStep += 1;
            }
        },
        prevStep: (state) => {
            if (state.currentStep > 1) {
                state.currentStep -= 1;
            }
        },
        goToStep: (state, action: PayloadAction<number>) => {
            if (action.payload >= 1 && action.payload <= state.totalSteps) {
                state.currentStep = action.payload;
            }
        },
    },
});

export const { nextStep, prevStep, goToStep } = stepSlice.actions;
export default stepSlice.reducer;
