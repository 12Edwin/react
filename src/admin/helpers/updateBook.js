import axios from "axios";


export const updateBook = async(id,book) =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const url = `https://libraryservice-production.up.railway.app/api/book/${id}`;
        const response = await axios.put(url,book,{
            headers:{
                'x-token' : token
            }
        })
        return response.data.book;
    }catch(err){
        return 'ERROR';
    }
}