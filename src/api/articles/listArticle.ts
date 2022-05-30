import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const listArticle = () => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listArticle',
  })
}

export default listArticle
