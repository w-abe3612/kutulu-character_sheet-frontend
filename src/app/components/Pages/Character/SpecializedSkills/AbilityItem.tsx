import React from 'react';
import ReactDOM from 'react-dom';
import CheckParameter from '../../../Commons/SheetParts/checkParameter'
import { specializedSkillType } from '../../../../config/type'

type Props = {
    skillItems: Array<specializedSkillType>
}

const AbilityItem: React.FC<Props> = ( { skillItems } ) :JSX.Element => {
    let result:JSX.Element
    let itemBoxes: Array<JSX.Element> = []

    itemBoxes = skillItems.map(( item:specializedSkillType ):JSX.Element => (
        <li key={ item.skill_param } className="m-slill-item m-specialize" >
                <CheckParameter
                    label={item.skill_name}
                    setClass="s-specialize"
                    itemName={item.skill_param}
                    itemValue={item.skill_value}
                    seconds={3}
                    isReduser='specializedSkill'
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