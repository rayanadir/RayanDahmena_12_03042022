import { ActivitySession } from "./ActivitySession.js";

export class UserActivity {
    userId;
    sessions;
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions.map(session => new ActivitySession(session.day, session.kilogram, session.calories))
    }
}