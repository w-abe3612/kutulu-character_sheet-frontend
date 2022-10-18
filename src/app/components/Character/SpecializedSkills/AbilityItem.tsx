import React from 'react';
import ReactDOM from 'react-dom';
import CheckButton from './checkButton'

export interface specializedSkillType {
    skill_name: string
    skill_param: string
    skill_value: number
    skill_order: number
}

type Props = {
    skillItems: Array<specializedSkillType>
}

//　これの返り値の型がわからない
const AbilityItem: React.FC<Props> = ( { skillItems } ) :any => {
    // jsxのエレメントを入れる時の型はJSX.Elementっぽい
    let result:any = [];
    let itemBoxes: Array<JSX.Element> = []

    itemBoxes = skillItems.map(( item:specializedSkillType ):JSX.Element => (
        <li key={ item.skill_param } className="m-slill-item m-specialize" >
            <div className="m-slill-item__title" >
                <label className="m-slill-item__title__text" >{item.skill_name}</label>
            </div>
            <div className="m-slill-item__content" >
                <ul className="m-check_list" >
                    <CheckButton
                          itemParam={ item.skill_param }
                          itemValue={ item.skill_value }
                    />
                </ul>
            </div>
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