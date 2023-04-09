import axios from "axios";


export const insertImage = async(id,img) =>{
    try{
        const user = await JSON.parse(localStorage.getItem('user'));
        const token = user.token;
        const url = `http://44.214.206.7:3000/api/book/image/${id}`;

        const formData = new FormData();
        formData.append('image', img);
        const response = await axios.put(url,formData,{
            headers:{
                'x-token' : token,
                'Content-Type': 'multipart/form-data'
            }
        })
        return response;
    }catch(err){
        return 'ERROR';
    }
}