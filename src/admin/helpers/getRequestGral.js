import axios from "axios";

export const getRequestGral = async () =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'))
        const token = user.token;
        const url = `https://libraryservice-production.up.railway.app/api/request/`;
        const response = await axios(url,{
            headers:{
                'x-token': token
            }
        });
        return response.data.requests;
    }catch(err){
        return 'ERROR';
    }
}
