import crypto from "crypto-js"

export const localStorageHandler = () => {
    const _vailKeys = ['userId','userName','public_page_token']
    const _private = {
        checkValidKey:( key:string ):boolean => {
            let result:boolean = false
            if ( _vailKeys.includes(key) ) {
                result = true
            }
            return result
        },
        recoveryText:( targetText:string | null ):string => {
            let result = ''
            if ( targetText !== null ) {
                let bytes = crypto.AES.decrypt(targetText, process.env.HASH_KEY ? process.env.HASH_KEY: '' )
                result = bytes.toString(crypto.enc.Utf8)
            }
            return result
        }
    }

    return {
        setLocalStorage:( storageKey:string, value:string):void => {
            let result:string = ''
            if ( _private.checkValidKey(storageKey) && storageKey && value ) {
                result = crypto.AES.encrypt(value, process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();
                localStorage.setItem(storageKey, result )
            }
        },

        // undifind パターンの対策をする
        getLocalStorage:( storageKey:string ):string | null => {
            let result:string | null = ''

            if (_private.checkValidKey(storageKey)) {
                result = localStorage.getItem(storageKey)
                result = _private.recoveryText(result)
                result = result === undefined? '': result
            }
            return result
        },
        clearLocalStorage:():void  => {
            localStorage.removeItem('userId')
            localStorage.removeItem('userName')
            localStorage.removeItem('public_page_token')
        }
    }
}