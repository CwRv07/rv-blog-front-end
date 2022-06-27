import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const listTag = () => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listTag',
    method: 'GET',
  })
}

export default listTag
