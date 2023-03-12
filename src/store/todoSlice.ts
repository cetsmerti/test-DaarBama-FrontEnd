import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface StateData {
    input: string
    loadingUser: boolean
    findUser: 'noUser' | 'notFindUser' | 'FindUser'
    error: string
    userDataOnBack: IUserDataOnBack
}

export interface IUserDataOnBack {
    login: string
    html_url: string
    following_url: string
    avatar_url: string
    starred_url: string
    created_at: string
    repos_url: string
    date?: string
    __v?: number
    id?: string
    gists_url: string
}

const initialState: StateData = {
    input: '',
    loadingUser: false,
    findUser: 'noUser',
    error: '',
    userDataOnBack: {
        login: '',
        html_url: '',
        following_url: '',
        avatar_url: '',
        starred_url: '',
        created_at: '',
        repos_url: '',
        gists_url: ''
    },

}

const userData = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setfindUser(state, action: PayloadAction<'notFindUser' | 'FindUser'>) {
            state.findUser = action.payload
        },
        setloadingState(state) {
            state.loadingUser = !state.loadingUser
        },
        setInput(state, action) {
            state.input = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setuserDataOnBack(state, action: PayloadAction<IUserDataOnBack>) {
            state.userDataOnBack = action.payload
        }

    }
})

export const { setInput, setloadingState, setfindUser, setError, setuserDataOnBack } = userData.actions;
export default userData.reducer