import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    locationFilter: {},
}

const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        setLocationFilter: (state, action) => {
            state.locationFilter = action.payload
        }
    }
})
export const { setLocationFilter } = propertySlice.actions

export default propertySlice.reducer