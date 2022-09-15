import React, { useEffect, useState } from 'react'
import {
    Link,
} from "react-router-dom";



const PreferenceList: React.FC = () => {
    
    return (
        <div className="m-preferenceList">
            <ul className="m-preferenceList__inner">
                <li className="m-list-basic m-list-li">基本設定</li>
                <li className="m-button-email m-list-li">メールアドレス変更</li>
                <li className="m-button-password m-list-li">パスワード変更</li>
            </ul>
        </div>
    )
}

export default PreferenceList