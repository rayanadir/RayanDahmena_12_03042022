export class ActivitySession {
    day;
    kilogram;
    calories;
    constructor(day,kilogram,calories){
        this.day=day;
        this.kilogram=kilogram;
        this.calories=calories;
    }
    static getUserAverageSessions=async(id)=>{
        const url = `http://localhost:3000/user/${id}/average-sessions`;
        return fetch(url).then((res)=> res.json());
    }
}