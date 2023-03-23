import axios from "axios";


export const getAllUsers = async() =>{
    try{
        const user = await JSON.parse (localStorage.getItem('user'));
        const token = user.token;
        const url = `http://localhost:3000/api/user/`;
        const response = await axios.get(url,{
            headers:{
                'x-token': token
            }
        });
        
        
        return response.data.users;
    }catch(error){
        return 'ERROR'
    }
    
} 