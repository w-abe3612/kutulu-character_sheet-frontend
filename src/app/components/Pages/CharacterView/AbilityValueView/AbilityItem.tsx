import React from 'react';
import ViewParameter from '../../../Commons/ViewPage/viewParameter'
import { abilityValueType } from '../../../../config/type'

type Props = {
    skillItems: Array<abilityValueType>
}

const AbilityItem: React.FC<Props> = ( { skillItems } ) :any => {
    // jsxのエレメントを入れる時の型はJSX.Elementっぽい
    let result:any = [];
    let itemBoxes: Array<JSX.Element> = []

    itemBoxes = skillItems.map(( item:abilityValueType ):JSX.Element => (
        <li key={ item.skill_param } className="m-slill-item" >
            <ViewParameter
                label={item.skill_name}
                setClass=""
                itemName={item.skill_param}
                itemValue={item.skill_value}
                seconds={4}
                isReduser='abilityValues'
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

export default AbilityItem