import axios from "axios";




export const validateToken = async () =>{
    
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const url = 'https://libraryservice-production.up.railway.app/api/auth/refresh/'
        const response = await axios.post(url,{token:token});
        console.log(response.data.valid);
        return response.data.valid;
    }catch{
        return 'ERROR';
    }
    
}