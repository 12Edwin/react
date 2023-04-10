import axios from 'axios'

export const auth = async (form) =>{
    try{
        const url = 'https://libraryservice-production.up.railway.app/api/auth/login/';
        const response = await axios.post(url,form);
        return response;
    }catch{
        return 'CREDENCIALES INVÁLIDAS';
    }
} 