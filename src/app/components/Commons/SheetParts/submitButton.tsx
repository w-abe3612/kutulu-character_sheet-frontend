import React, { useState, useEffect } from 'react'
import { useFormContext } from "react-hook-form";

type Props = {
    isDisabled: boolean
    isPage:string
}

const SubmitButton: React.FC<Props> = (props): JSX.Element => {
    const btnText = props.isPage === 'create' ? '作成':'更新'
    
    return (
        <div className="m-sheet-submit">
            <div className="wraper-fixed">
                <div className="wrap-inner">
                    <button
                        className="m-submit-btn"
                        type="submit"
                        disabled={props.isDisabled}
                    >{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default SubmitButton