import React from 'react'

const SubmitButton: React.FC = ( ): JSX.Element => {
    // 押した瞬間から少しの間制御不可にする(連打されないように)
    return (
        <button
            className="btn"
            type="submit"
        >更新</button>
    )
}

export default SubmitButton