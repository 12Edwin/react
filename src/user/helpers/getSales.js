import axios from "axios";


export const getSales = async (id) =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const email = await getEmail(id,token);
        const url = 'https://libraryservice-production.up.railway.app/api/sale/';
        const response = await axios.get(url,{
            headers:{
                'x-token': token
            },
            params:{
                'email' : email
            }
        })
        return response.data.sales;
    }catch(error){
        return 'ERROR';
    }
}

const getEmail = async(id,token) =>{
    const url = `https://libraryservice-production.up.railway.app/api/user/${id}`;
    const response = await axios(url,{
        headers:{
            'x-token': token
        }
    });
    return response.data.user.email
}