import React from 'react';
import ReactDOM from 'react-dom';
import CheckParameter from '../../../Commons/SheetParts/checkParameter'

interface abilityValueType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_type: number
    skill_order: number
}

type Props = {
    skillItems: Array<abilityValueType>
}

const AbilityItem: React.FC<Props> = ( { skillItems } ) :JSX.Element => {

    let result:JSX.Element
    let itemBoxes: Array<JSX.Element> = []

    itemBoxes = skillItems.map(( item:abilityValueType ):JSX.Element => (
        <li key={ item.skill_param } className="m-slill-item" >
            <CheckParameter
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