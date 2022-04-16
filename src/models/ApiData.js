class ApiData{
    static getUserMainData=async(id)=>{
        const url = `http://localhost:3000/user/${id}`;
        return fetch(url).then((res)=>res.json());
    }
    
    static getUserActivity=async(id)=>{
        const url = `http://localhost:3000/user/${id}/activity`;
        return fetch(url).then((res)=> res.json());
    }
    
    static getUserPerformance=async(id)=>{
        const url = `http://localhost:3000/user/${id}/performance`;
        return fetch(url).then((res)=> res.json());
    }
    
    static getUserAverageSessions=async(id)=>{
        const url = `http://localhost:3000/user/${id}/average-sessions`;
        return fetch(url).then((res)=> res.json());
    }
}

export default ApiData