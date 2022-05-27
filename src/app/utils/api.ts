import {
    _getProfiles,
} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getProfiles(),
    ]).then((profiles) => ({
        profiles,
    }))
}