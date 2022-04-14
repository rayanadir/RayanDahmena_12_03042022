import axios from "axios";

export class UserPerformance{
    userId;
    kind;
    data;
    constructor(userId,kind,data){
        this.userId=userId;
        this.kind=kind;
        this.data=data;
    }
    static getUserPerformance(id){
        const url = `http://localhost:3000/user/${id}/performance`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
            return data;
        })
    }
}