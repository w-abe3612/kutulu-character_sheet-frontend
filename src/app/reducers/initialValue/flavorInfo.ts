import { flavorInfoType } from '../../config/type'

const initialFlavorInfo: Array<flavorInfoType> = [
    {
        flavor_info_name: '職業',
        flavor_info_param: 'occupation',
        flavor_info_value: '', 
        flavor_info_order: 0,
    },
    {
        flavor_info_name: '出身地', 
        flavor_info_param: 'birthplace', 
        flavor_info_value: '', 
        flavor_info_order: 1,
    },
    {
        flavor_info_name: '階級',
        flavor_info_param: 'rank',
        flavor_info_value: '', 
        flavor_info_order: 2,
    },
    {
        flavor_info_name: '家柄', 
        flavor_info_param: 'familybackground', 
        flavor_info_value: '', 
        flavor_info_order: 3,
    },

]

export default initialFlavorInfo