import axios from "./service"

// export async function getList (params) {
//   return request('/hd/mylist', {
//     method: 'GET',
//     body: params
//   })
// }
// export async function getImg (params) {
//   return request('hd/public/upload/',{
//     method:'GET',
//     body:params
//   })
// }
export const test = (id)=> {
  return axios.post('/test',{
    params: {
      id
    },
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Connection': 'keep-alive'
    }
  })
}
// export const getIndex = (pageNo) => {
//   return axios.get("/home/index.html", {
//       params: {
//           // _: Date.now(),
//           t: Date.now(),
//           pageNo
//       },
//       headers: {
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//           // 'Connection': 'keep-alive'
//       }
//   })
// }