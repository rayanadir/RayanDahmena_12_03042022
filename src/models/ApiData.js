import axios from "axios";

export class ApiData{
    static async getUserMainData(id){
        const url = `http://localhost:3000/user/${id}`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
            return data;
        })
    }
    static async getUserActivity(id){
        const url = `http://localhost:3000/user/${id}/activity`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
            return data
        })
    }
   static async getUserPerformance(id){
        const url = `http://localhost:3000/user/${id}/performance`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
            return data;
        })
    }
    static async getUserAverageSessions(id){
        const url = `http://localhost:3000/user/${id}/average-sessions`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
            return data;
        })
    }
}