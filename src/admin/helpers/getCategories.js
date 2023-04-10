import axios from "axios";


export const getCategories = async () =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const url = 'https://libraryservice-production.up.railway.app/api/category/';
        const response = await axios.get(url,{
            headers:{
                'x-token' : token
            }
        });
        return response.data.category;
    }catch(err){
        return 'ERROR';
    }
}