import { getInitialData } from '../utils/api'
import { receiveProfiles } from './profiles'

export function handleInitialData() {
    return (dispatch:any) => {
        return getInitialData()
            .then((profiles) => {
                dispatch(receiveProfiles(profiles))
            })
    }
}