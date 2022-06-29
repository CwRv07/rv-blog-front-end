import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

interface UpdateCommentParams {
  id: string | number
  praise: number
  status: 1 | 0
  content: string
}

const updateComment = (data: UpdateCommentParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/updateComment',
    method: 'PUT',
    data,
  })
}

export default updateComment
