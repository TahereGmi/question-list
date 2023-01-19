import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IQuestionList } from '@/src/types/Questionlist'
import { RootState, AppDispatch } from '../store'
import API from '@/src/helpers/API'

const initialState: IQuestionList = {
  result: [],
  loading: false,
  loaded: false,
  error: null
}

export const getQuestions = createAsyncThunk(
  "home/questionList",
  async () => {
    const res = await API.get('users/1/posts');
    return res;
  }
);

export const questionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getQuestions.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }),
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.result = action.payload.data
      state.loaded = true
      state.loading = false
    })
  },
})

export const selectedValue = (state: RootState) => state.questions

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default questionListSlice.reducer
