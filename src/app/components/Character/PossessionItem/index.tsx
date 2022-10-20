import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../reducers/hooks'
import { characterInfoType } from '../../../reducers/types'
import { setTextAreaInfo } from '../../../reducers/characterInfosSlice'
import SectionWrap from "../../Commons/Layout/sectionWrap"


const PossessionItem: React.FC = () => {
    const [textAreaInputed, setInputed] = useState('');
    const CharacterInfo: characterInfoType = useAppSelector((state: any) => state.CharacterInfo)
    const dispatch = useAppDispatch()

    const handleInputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputed(e.target.value)

        // todo stateと値を同じにするつもりでやってるけど、これだと意味ないかも
        dispatch(setTextAreaInfo({
            value: e.target.value,
            itemParam: "possession_item"
        }))
    }

    return (
        <SectionWrap title="所持品" >
                <textarea
                    name="possession_item"
                    className="m-sentenceInput"
                    value={textAreaInputed}
                    onChange={(e) => {
                        handleInputTextArea(e)
                    }}
                    cols={50}
                    rows={5} >任意入力項目です。予め所持している物品等を入力しておく欄になります。スマートフォンを持っているか、現代人なら持っている筈だ等言い合いになる事もありますが、シナリオが破綻する事があり、事前にキーパーに許可を貰う方がいいです。</textarea>
        </SectionWrap>
    )
}

export default PossessionItem