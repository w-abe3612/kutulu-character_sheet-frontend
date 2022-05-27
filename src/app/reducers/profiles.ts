import { RECEIVE_PROFILES } from '../actions/profiles'

export default function profiles(state = {}, action:any) {
  const { question, authedUser, author, qid, answer } = action

  switch (action.type) {
    case RECEIVE_PROFILES:
      return {
        ...state,
        ...action.profiles
      }
    default:
      return state
  }
}