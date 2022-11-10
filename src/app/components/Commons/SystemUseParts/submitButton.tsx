import React from 'react'

type submitProps = {
    text: string
}


//todo 実際に運用フェーズに入ったら攻撃されるだろうから、rechapture入れる
export const SystemUseSubmitButton: React.FC<submitProps> = (props): JSX.Element => {

    return (
        <div className="m-submit-wrap">
            <button
                className="submit-btn"
                type="submit"
            >{props.text}</button>
        </div>
    )
}

type confirmProps = {
    submitText: string
    returnText:string
    handleReturn:any
}

export const SystemUseConfirmationButton: React.FC<confirmProps> = (props): JSX.Element => {
    const handleReturnBotton = (e:React.MouseEvent) => {
        e.preventDefault;
        props.handleReturn(e)
    }

    return (
        <div className="m-confirmation-wrap">
            <button
                className="return-btn"
                type="button"
                onClick={(e)=>{handleReturnBotton(e)}}
            >{props.returnText}</button>
            <button
                className="submit-btn"
                type="submit"
            >{props.submitText}</button>
        </div>
    )
}

