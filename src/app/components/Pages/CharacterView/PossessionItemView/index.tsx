import React,{useEffect} from 'react';
import { useAppSelector } from '../../../../reducers/hooks'
import { kutuluInfoType } from '../../../../config/type'
import SectionWrap from "../../../Commons/Layout/sectionWrap"
import ViewTextArea from '../../../Commons/ViewPage/viewTextArea'


const PossessionItemView: React.FC= (): JSX.Element => {
    let kutuluInfo:kutuluInfoType = useAppSelector( ( state : any ) => state.kutuluInfo )
    return (
        <SectionWrap title="個人情報"
        setClass=''
        description='' >
            <ViewTextArea
                name="possession_item"
                value={ kutuluInfo.possession_item }
                setClass=""
                setValueAction={{
                    type:'kutuluInfo'
                }}
            />
        </SectionWrap>
    )
}

export default PossessionItemView