import axios from "axios";


const user = JSON.parse(localStorage.getItem('user'))
export const getBookDetails = async (id) =>{
    try{
        const token = user.token;
        const url = 'http://44.214.206.7:3000/api/book/'
        const response = await axios.get(url,{
            headers:{
                'x-token' : token
            }
        });
        console.log(response);
        
    }catch(error){
        return 'ERROR';
    }
}