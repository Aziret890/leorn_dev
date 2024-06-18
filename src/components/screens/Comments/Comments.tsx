import CommentsList from '@/components/ui/CommentsList/CommentsList'
import React from 'react'
import { fetchData } from '@/api/fetchData'
import { ICommentsResponse } from '@/types/types'

const Comments = async () => {
  const data: ICommentsResponse[] = await fetchData('review/')
  console.log('datvwem[v[mewo[a1', data)
  return (
    <section className="comments">
      <h2 className="comments__title">ЧТО ГОВОРЯТ ПРО НАС</h2>
      {data && <CommentsList data={data} />}
      <div className="comments__circle"></div>
    </section>
  )
}

export default Comments
