import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { headers }  from '../lib/api'

function AddComment ({ project, setProject }) {

  const [commentText, setCommentText] = React.useState({
    text: '',
  })
  const [refresh, setRefresh] = React.useState()

  const { projectId } = useParams()


  if (refresh) {
    setRefresh(false)
  }

  const handleCommentInput = (e) => {
    setCommentText({ ...commentText, text: e.target.value })
  }
  
  const handleSubmitComment = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/projects/${projectId}/comments`, commentText, headers())
      setProject(res.data)
      setCommentText({ text: '' })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section>
      <div>
        <div>
          <div>
            <form onSubmit={handleSubmitComment}>
              <div>
                <label htmlFor="comment-text">Comment text</label>
                <textarea id="comment-text"
                  name="comment-text"
                  placeholder="Comment text"
                  value={commentText.text}
                  onChange={handleCommentInput}
                />
              </div>
              <button
                type="submit"
              >Submit comment</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        {project ? (project.comments.map(data => (
          <div key={data._id} className='index-info'>
            <p className='gallery-title'>{data.text}</p>
            <p className='user'>Comment by: {data.addedBy.username}</p>
            <p className='user'>Date created: {data.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
          </div>
        )).reverse())
          :
          ('')
        }
      </div>
    </section>
  )

}

export default AddComment