import { UserMainData } from "../models/UserMainData";
import { UserActivity } from "../models/UserActivity"
import { UserPerformance } from "../models/UserPerformance";
import { UserActivityAverageSession } from "../models/UserActivityAverageSession";

class ApiData {
    /**
     * get user main data from API
     * @param { String } id user id 
     * @returns { Object }
     */
    static getUserMainData = async (id) => {
        const url = `http://localhost:3000/user/${id}`;
        return fetch(url)
            .then((res) => res.json())
            .then(({ data }) => new UserMainData(data.id, data.userInfos, data.todayScore || data.score, data.keyData));
    }

    /**
     * get user activity from API (USER_ACTIVITY)
     * @param { String } id user id
     * @returns { Object }
     */
    static getUserActivity = async (id) => {
        const url = `http://localhost:3000/user/${id}/activity`;
        return fetch(url)
            .then((res) => res.json())
            .then(({ data }) => new UserActivity(data.userId, data.sessions));
    }

    /**
     * get user performance from API (USER_PERFORMANCE)
     * @param { String } id user id 
     * @returns { Object }
     */
    static getUserPerformance = async (id) => {
        const url = `http://localhost:3000/user/${id}/performance`;
        return fetch(url)
            .then((res) => res.json())
            .then(({data})=> new UserPerformance(data.kind,data.data));
    }

    /**
     * get user average sessions from API (USER_AVERAGE_SESSIONS)
     * @param { String } id user id 
     * @returns { Object }
     */
    static getUserAverageSessions = async (id) => {
        const url = `http://localhost:3000/user/${id}/average-sessions`;
        return fetch(url)
            .then((res) => res.json())
            .then(({data})=> new UserActivityAverageSession(data.userId,data.sessions));
    }
}

export default ApiData