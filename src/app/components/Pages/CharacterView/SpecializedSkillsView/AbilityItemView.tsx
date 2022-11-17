import React from 'react';
import ReactDOM from 'react-dom';
import ViewParameter from '../../../Commons/ViewPage/viewParameter'
import { abilityValueType } from '../../../../config/type'

type Props = {
    skillItems: Array<any>
}

const AbilityItemView: React.FC<Props> = ( { skillItems } ) :JSX.Element => {

    let result:JSX.Element
    let itemBoxes: Array<JSX.Element> = []

    itemBoxes = skillItems.map(( item:any ):JSX.Element => (
        <li key={ item.skill_param } className="m-slill-item" >
            <ViewParameter
                label={item.skill_name}
                setClass="s-specialize"
                itemName={item.skill_param}
                itemValue={item.skill_value}
                seconds={3}
            />
        </li>
    ))

    result = (
        <div className = "l-inner_box" >
            { itemBoxes }
        </div>
    )

    return result
}

export default AbilityItemView