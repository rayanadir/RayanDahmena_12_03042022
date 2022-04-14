import axios from "axios";

export class UserMainData{
    id;
    userInfos;
    score;
    keyData;
    constructor(id,userInfos,score,keyData){
        this.id=id;
        this.userInfos=userInfos;
        this.score=score;
        this.keyData=keyData;
        
    }
    static getUserMainData(id){
        const url = `http://localhost:3000/user/${id}`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
            return data;
        })
    }
}