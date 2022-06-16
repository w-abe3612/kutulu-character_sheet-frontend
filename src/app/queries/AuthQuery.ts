import * as api from "../api/AuthAPI"
import { useQuery, useMutation } from "react-query"
import { toast } from 'react-toastify';


const useUser = () => {
    return useQuery('users', api.getUsers)
}

export {
    useUser
}