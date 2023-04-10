import axios from "axios";


export const updateRequest = async(id,status) =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const url = `https://libraryservice-production.up.railway.app/api/request/${id}`;
        const response = await axios.put(url,status,{
            headers:{
                'x-token' : token
            }
        })
        return response.data;
    }catch(err){
        return 'ERROR';
    }
}