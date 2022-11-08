/*
            // todo このへんの処理って多分ここでやるべきじゃない
            const localIsLoggedIn = crypto.AES.encrypt('1', process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();
            const localId         = crypto.AES.encrypt( String(action.payload.userId), process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();
            const localName       = crypto.AES.encrypt( action.payload.userName, process.env.HASH_KEY ? process.env.HASH_KEY: '' ).toString();

            localStorage.setItem('isLoggedIn', localIsLoggedIn);
            localStorage.setItem('userId', localId);
            localStorage.setItem('userName', localName);
            localStorage.setItem('public_page_token', action.payload.public_page_token);


*/