import axios from 'axios';

const BaseUrl = 'http://localhost:5024';

export async function name() {
    let res = await axios.get(BaseUrl+"/name");
    if(res.status === 200){
        return res.data;
    }else{
        return[];
    }
}

