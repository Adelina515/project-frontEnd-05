import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addExercisesDiary, addProductDiary, deleteExercisesDiary, deleteProductDiary, fetchAllDiary } from './diaryOperations';
import { handleFulfilledAddExercises, handleFulfilledAddProduct, handleFulfilledAllDiary, handleFulfilledDeleteExercises, handleFulfilledDeleteProduct, handlePending, handleRejected } from './diaryReducers';

const initialState = {
    diaryProducts: [],
    diaryExercises: [],
    isLoading: false,
    error: null
};

const diarySlice = createSlice({
    name: 'diary',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDiary.fulfilled, handleFulfilledAllDiary)
            .addCase(addProductDiary.fulfilled, handleFulfilledAddProduct)
            .addCase(deleteProductDiary.fulfilled, handleFulfilledDeleteProduct)
            .addCase(addExercisesDiary.fulfilled, handleFulfilledAddExercises)
            .addCase(deleteExercisesDiary.fulfilled, handleFulfilledDeleteExercises)
            .addMatcher(isAnyOf(
                fetchAllDiary.pending, fetchAllDiary.rejected,
                addProductDiary.pending, addProductDiary.rejected,
                deleteProductDiary.pending, deleteProductDiary.rejected,
                addExercisesDiary.pending, addExercisesDiary.rejected,
                deleteExercisesDiary.pending, deleteExercisesDiary.rejected
            ), handlePending)
            .addMatcher(isAnyOf(
                fetchAllDiary.rejected, addProductDiary.rejected, deleteProductDiary.rejected,
                addExercisesDiary.rejected, deleteExercisesDiary.rejected
            ), handleRejected);
    }
});

export const diaryReducer = diarySlice.reducer;