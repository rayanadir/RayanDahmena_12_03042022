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
    static getUserMainData=async(id)=>{
        const url = `http://localhost:3000/user/${id}`;
        return fetch(url).then((res)=>res.json());
    }
}