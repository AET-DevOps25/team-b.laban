import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userType } from './types'

export interface UserState {
    user: userType
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        singIn: (state, action: PayloadAction<userType>) => {
            state.user = action.payload
        },
    },
})

export const { singIn } = userSlice.actions

export default userSlice.reducer