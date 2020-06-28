import axios from 'axios'
export function request (url, option) {
  const method = option.method
  const body = option.body
  if (method == 'GET') {
    return axios.get(url, { params: body }).then((res) => {
      console.log('response body<--:', res.data)
      return res.data
    }).catch((err) => {
      console.error('response err<--:', err)
      if (err.res && err.res.data) {
        return err.res.data
      }
      throw err
    })
  } else {
    return axios.post(url, { params: body }).then(res => {
      console.log('response body<--:', res.data)
      return res.data
    })
  }
}
