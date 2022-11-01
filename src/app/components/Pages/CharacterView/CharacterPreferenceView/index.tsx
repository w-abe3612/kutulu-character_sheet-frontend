import React,{useEffect} from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType  } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import ViewTextArea from '../../../Commons/ViewPage/viewTextArea'



const CharacterPreferenceView: React.FC = (): JSX.Element => {
    let kutuluInfo:kutuluInfoType = useAppSelector( ( state : any ) => state.kutuluInfo )
    return (
        <SectionWrap title="個人情報" >
            <ViewTextArea
                name="character_preference"
                value={ kutuluInfo.character_preference }
                setClass=""
                setValueAction={{
                    type:'',
                    name:'',
                }}
            />
        </SectionWrap>
    )
}

export default CharacterPreferenceView
