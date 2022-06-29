import { CommentData } from '@/utils/type'
/*
 ancestorId:祖先ID
 parentId:父ID

 */
const commentFormat = (data: CommentData[]) => {
  if (data == null || data.length === 0) {
    return []
  }

  const result: CommentData[] = []
  const children: CommentData[] = []

  /* 元素分类 */
  data.forEach((curr) => {
    if (curr.ancestorId.toString() === '0') {
      result.push(curr)
    } else {
      children.push(curr)
    }
  })

  /* 构造树 */
  children.forEach((curr) => {
    const index = result.findIndex(
      (item) => item.id.toString() === curr.ancestorId.toString()
    )
    if (index !== -1) {
      if (result[index].list == null) {
        result[index].list = []
      }

      ;(result[index].list as CommentData[]).push(curr)
    }
  })

  return result
}

export default commentFormat
