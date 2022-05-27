export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'

export function receiveProfiles(profiles: any) {
    return {
        type: RECEIVE_PROFILES,
        profiles
    }
}