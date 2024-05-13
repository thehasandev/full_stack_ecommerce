import { error } from "console"

const baseUrl = "http://localhost:8000/api/v1"
export async function getData(url:string){
  const res = await fetch(`${baseUrl}/${url}`)
  if(!res.ok){
    throw new Error("Could not get Data")
  }
  return res.json()
}