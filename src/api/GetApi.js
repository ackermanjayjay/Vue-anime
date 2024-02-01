import axios from 'axios'
const url = import.meta.env.VITE_SOME_KEY
export async function GetApi() {
  const response = await axios(`${url}/top/anime?limit=6`)
  return response.data.data
}
