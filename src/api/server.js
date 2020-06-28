import { request } from './request'

export async function getList (params) {
  return request('/hd/mylist', {
    method: 'GET',
    body: params
  })
}
