import { characterInfoType } from '../../config/type'

const initialCharacterInfo: characterInfoType = {
    loading: true,
    success: false,
    error: '',
    player_name:'',
    player_character:'',
    image_path:'',
    image_name:'',
    img_upload_base64:'',
    public_page_token:'',
    public_flg:1,
    character_type:0
}

export default initialCharacterInfo