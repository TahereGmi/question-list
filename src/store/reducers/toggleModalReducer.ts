import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store'

const initialState = false

export const toggleModalSlice = createSlice({
  name: 'toggleModal',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
        return state = action.payload
    }
  },
})
export const { toggle } = toggleModalSlice.actions
export const selectedValue = (state: RootState) => state.toggleModal
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default toggleModalSlice.reducer
