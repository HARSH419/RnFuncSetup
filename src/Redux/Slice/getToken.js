import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  token: "",
  profileImage:"",
  userInfo: {},
  error: {},
  current:"",
  previous:"",
}

export const TokenSlice = createSlice({
  name: 'Token',
  initialState,
  reducers: {
    setUserInfo (state, action)  {
      state.userInfo = action.payload
    },
    setToken (state, action)  {
      state.token = action.payload
    },
    setUserInfoError (state, action)  {
      state.error = action.payload
    },
    setRoute (state, action)  {
     state.current = action.payload.current,
     state.previous = action.payload.previous
    },
    clearToken (state)  {
      Object.assign(state, initialState);

    },
  
  
  },
})

export const { setToken ,clearToken, setUserInfo,setRoute, setUserInfoError} = TokenSlice.actions
export default TokenSlice.reducer