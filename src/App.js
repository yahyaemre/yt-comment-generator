import React, {useState, useEffect} from 'react'
import Comment from './components/Comment'
import EditComment from './components/EditComment'

function App() {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState(null);
  const [date, setDate] = useState('? years ago');
  const [comment, setComment] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  return (
    <div>
      <h1 className='text-center text-white mt-5 text-3xl font-semibold'>Fake YouTube Comment Generator</h1>
      <Comment avatar={avatar} username={username} date={date} likeCount={likeCount} comment={comment}  />
      <hr className='mt-8 border-[#AAAA]'/>
      <EditComment setAvatar={setAvatar} setUsername={setUsername} setDate={setDate} setLikeCount={setLikeCount} setComment={setComment} />
    </div>
  )
}

export default App