import axios from 'axios'

export const register = async (form) =>{
        const url = 'http://44.214.206.7:3000/api/user/';
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