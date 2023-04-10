import axios from "axios";


export const getUser = async(id) =>{
    try{
        const user = await JSON.parse (localStorage.getItem('user'));
        const token = user.token;
        const url = `https://libraryservice-production.up.railway.app/api/user/${id}`;
        const response = await axios.get(url,{
            headers:{
                'x-token': token
            }
        });
        
        return response.data.user;
    }catch(error){
        return 'ERROR'
    }
    
} 