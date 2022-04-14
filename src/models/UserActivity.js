import { ActivitySession } from "./ActivitySession.js";
import axios from "axios";

export class UserActivity {
    userId;
    sessions;
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions.map(session => new ActivitySession(session.day, session.kilogram, session.calories))
    }
    static getUserActivity(id){
        const url = `http://localhost:3000/user/${id}/activity`;
        axios.get(url).then((res)=> {
            const data=res.data.data;
            console.log(data);
        })
    }
}