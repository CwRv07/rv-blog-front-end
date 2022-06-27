import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const countArticle = () => {
  return rvRequest({
    url: MODULE_BASE_URL + '/total',
    method: 'GET',
  })
}

export default countArticle
