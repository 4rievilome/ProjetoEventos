export class Connect{
    serverAdd = url;
    constructor(serverAdd){
        this.serverAdd = serverAdd
    }

    async postRequest(route, body){
        const config = {
            method:"POST",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
        const URL = `${this.serverAdd}/${route}`
        const response = await fetch(URL,config);
        if(!response.ok) return {MSG:"Fetch error"}
        return await response.json();
    }

    async getRequest(route){
        const config = {method: "GET"}
        const URL = `${this.serverAdd}/${route}`
        const response = await fetch(URL,config);
        if(!response.ok) return {MSG:"Fetch error"};
        return await response.json();
    }

    async request({verb,route, body}){
        return verb === "GET" ? await this.getRequest(route) : await this.postRequest(route,body);
    }
}