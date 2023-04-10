import axios from "axios";


export const createSale = async (values) =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const email = await getEmail(user.token,user.id);
        console.log({...values, email : email});
        const token = user.token;
        const url = 'https://libraryservice-production.up.railway.app/api/sale/';

        const response = await axios.post(url,{...values, email : email},{
            headers:{
                'x-token' : token
            }
        })
        return response;
    }catch(error){
        return 'ERROR';
    }
}

const getEmail = async (token,id) =>{
    const url = `https://libraryservice-production.up.railway.app/api/user/${id}`;
    const response = await axios.get(url,{
        headers:{
            'x-token' : token
        }
    })
    return response.data.user.email;
}