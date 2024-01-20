export const selectDiaryProducts = state => state.diary.productsInDiary;
export const selectDiaryExercises = state => state.diary.exercisesInDiary;

export const selectBurnedCaloriesByDate = state => state.diary.burnedCaloriesByDate;
export const selectConsumedCaloriesByDate = state => state.diary.consumedCaloriesByDate;
export const selectSportsRemaining = state => state.diary.sportsRemaining;


export const selectDiaryIsLoading = state => state.diary.IsLoading;
export const selectDiaryError = state => state.diary.error;

