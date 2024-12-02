import { environment } from "../utils/environment";

const headers = {
    "Content-Type": "application/json",
    "X-Master-Key": environment.apiKey,
};


export async function getLibros() {

    const response = await fetch(environment.apiUrl, { headers });
    const data = await response.json(); 
    return data.record.libros; 
    
}