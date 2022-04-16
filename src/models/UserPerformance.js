export class UserPerformance{
    userId;
    kind;
    data;
    constructor(userId,kind,data){
        this.userId=userId;
        this.kind=kind;
        this.data=data;
    }
    static getUserPerformance=async(id)=>{
        const url = `http://localhost:3000/user/${id}/performance`;
        return fetch(url).then((res)=> res.json());
    }
}