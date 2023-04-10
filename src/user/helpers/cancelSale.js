import axios from "axios";


export const cancelSale = async(id) =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const url = `https://libraryservice-production.up.railway.app/api/sale/${id}`
        const response = await axios.delete(url,{
            headers:{
                'x-token' : token
            }
        })
        return response;
    }catch(error){
        return 'ERROR';
    }
}