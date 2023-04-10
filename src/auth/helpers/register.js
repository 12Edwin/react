import axios from 'axios'

export const register = async (form) =>{
        const url = 'https://libraryservice-production.up.railway.app/api/user/';
        const response = await axios.post(url,{
            name: form.name,
            surname: form.surname,
            career: form.career,
            role: 'USER_ROLE',
            status: true,
            email: form.email,
            password: form.password
        })
        
        return response;
} 