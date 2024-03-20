import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  },
  reducers: {
    activeuser: (state, action) => {
     state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { activeuser } = userSlice.actions

export default userSlice.reducer