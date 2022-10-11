import { Party } from "../types"

const API_URL= 'https://tlv-events-app.herokuapp.com/events/uk/london' 


export async function fetchEvents(): Promise<Party[]> {
    
    try {
        const response  = await fetch(API_URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error

    }

}