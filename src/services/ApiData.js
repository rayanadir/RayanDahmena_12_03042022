import { UserMainData } from "../models/UserMainData";
import { UserActivity } from "../models/UserActivity"
import { UserPerformance } from "../models/UserPerformance";
import { UserActivityAverageSession } from "../models/UserActivityAverageSession";

class ApiData {
    static url=`http://localhost:3000/user/`;
    /**
     * get user main data from API
     * @param { String } id user id 
     * @returns { Object }
     */
    static getUserMainData = async (id) => {
        return fetch(ApiData.url + id)
            .then((res) => res.json())
            .then(({ data }) => new UserMainData(data.id, data.userInfos, data.todayScore || data.score, data.keyData));
    }

    /**
     * get user activity from API (USER_ACTIVITY)
     * @param { String } id user id
     * @returns { Object }
     */
    static getUserActivity = async (id) => {
        return fetch(ApiData.url + id + '/activity')
            .then((res) => res.json())
            .then(({ data }) => new UserActivity(data.userId, data.sessions));
    }

    /**
     * get user performance from API (USER_PERFORMANCE)
     * @param { String } id user id 
     * @returns { Object }
     */
    static getUserPerformance = async (id) => {
        return fetch(ApiData.url + id + '/performance')
            .then((res) => res.json())
            .then(({ data }) => new UserPerformance(data.kind, data.data));
    }

    /**
     * get user average sessions from API (USER_AVERAGE_SESSIONS)
     * @param { String } id user id 
     * @returns { Object }
     */
    static getUserAverageSessions = async (id) => {
        return fetch(ApiData.url + id + '/average-sessions')
            .then((res) => res.json())
            .then(({ data }) => new UserActivityAverageSession(data.userId, data.sessions));
    }
}

export default ApiData