let profiles = {
    abilityValue: {
        points: {
            totalPoint: 13,
            acquisitionPoint: 0
        },
        activeSkill: {
            prestige: {
                name: '名声',
                inputs: 0
            },
            speech: {
                name: '弁舌',
                inputs: 0
            },
            credit: {
                name: '信用',
                inputs: 0
            },
            parentage: {
                name: '家格',
                inputs: 0
            },
        },
        passiveSkill: {
            shooting: {
                name: '射撃',
                inputs: 0
            },
            combat: {
                name: '白兵',
                inputs: 0
            },
            undercover: {
                name: '隠密',
                inputs: 0
            },
            agile: {
                name: '敏捷',
                inputs: 0
            },
            strength: {
                name: '筋力',
                inputs: 0
            },
        }
    }
}

export const _getProfiles = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...profiles }), 1000)
    })
}