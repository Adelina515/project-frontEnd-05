export const handlePending = (state) => {
    state.error = null;
    state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
};
export const handleFulfilledAllDiary = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
   state.productsInDiary = payload.productsInDiary || ["Hello", "world"];
    state.exercisesInDiary = payload.exercisesInDiary || [];
    state.burnedCaloriesByDate = payload.burnedCaloriesByDate || 0;
    state.consumedCaloriesByDate = payload.consumedCaloriesByDate || 0;
    state.sportsRemaining = payload.sportsRemaining || 0;
};
export const handleFulfilledAddProduct = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    state.productsInDiary.push(payload);
};
export const handleFulfilledDeleteProduct = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    const index = state.productsInDiary.findIndex(product => product._id === payload.productId);
    if (index !== -1) {
        state.productsInDiary.splice(index, 1);
    }
};


export const handleFulfilledAddExercises = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    state.exercisesInDiary.push(payload);
};


export const handleFulfilledDeleteExercises = (state, { payload }) => {
    state.error = null;
    state.isLoading = false;
    const index = state.exercisesInDiary.findIndex(exercises => exercises._id === payload.exerciseId);
    if (index !== -1) {
        state.exercisesInDiary.splice(index, 1);
    }
};