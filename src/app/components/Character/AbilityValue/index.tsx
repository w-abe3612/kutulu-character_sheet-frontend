import React from 'react';
import ReactDOM from 'react-dom';
import AbilityItem from './AbilityItem'
import AcquisitionPoint from './AcquisitionPoint'

// パッシブスキルとかそこの区切り
const abilityTypeSeparation = (text:string) => {
        return text
}

class SkillCheck extends React.Component {
    state = {}


    render() {
        return (
            <div className="m-ability_value l-section_wrap">
                <div className="l-section_Tab"></div>
                <div className="l-section_content">
                    <AcquisitionPoint />
                    <span>{ abilityTypeSeparation('パッシブスキル') }</span>
                    <AbilityItem />
                    <span>{ abilityTypeSeparation('アクティブスキル') }</span>
                    <AbilityItem />
                </div>
            </div>
        )
    }
}

export default SkillCheck