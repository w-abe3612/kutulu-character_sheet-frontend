export interface flavorInfoType {
    flavor_info_name: string
    flavor_info_param: string
    flavor_info_value: string
    flavor_info_order: number
}

const initialFlavorInfo: Array<flavorInfoType> = [
    {
        flavor_info_name: '職業',
        flavor_info_param: 'occupation',
        flavor_info_value: '', 
        flavor_info_order: 0,
    },
    {
        flavor_info_name: '年齢', 
        flavor_info_param: 'age', 
        flavor_info_value: '', 
        flavor_info_order: 1,
    },
    {
        flavor_info_name: '性別', 
        flavor_info_param: 'sex', 
        flavor_info_value: '', 
        flavor_info_order: 2,
    },
    {
        flavor_info_name: '出身地', 
        flavor_info_param: 'birthplace', 
        flavor_info_value: '', 
        flavor_info_order: 3,
    },
    {
        flavor_info_name: '身長', 
        flavor_info_param: 'height', 
        flavor_info_value: '', 
        flavor_info_order: 4,
    },
    {
        flavor_info_name: '体重', 
        flavor_info_param: 'weight', 
        flavor_info_value: '', 
        flavor_info_order: 5,
    },

]

export default initialFlavorInfo