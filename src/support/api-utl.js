const fetch = require("node-fetch")
import { log } from "./logger-utils"



export async function GET_APIResponseCode(apiUrl) {
    let status
    await fetch(apiUrl)
    .then((res) => { 
      status = res.status; 
      return res.json() 
    }).catch((err) => {
      // handle error
      console.error(err);
    });
  return status
}

export async function GET_APIData(apiUrl) {
	return await fetch(apiUrl, {
		method: "GET",
		headers: {
			"accept":"application/json",
			"Content-Type": "text/plain"
		  },
	})
		.then(data => data.json())
		.catch(error => log("\n**** ERROR:", error))
}