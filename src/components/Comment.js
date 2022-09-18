import React, { createRef, useEffect } from 'react';
import { useScreenshot } from 'use-react-screenshot';
import { LikeButton,  DislikeButton } from './icons';

function Comment({ avatar, username, date, likeCount, comment }) {
  const realizedComment = (comment) => {
    // replace the hashtags with blue text
    comment = comment
    .replace(/#([\wşçöğüıİ]+)/gi, '<span id="hash">#$1</span>')
    .replace(/(https?:\/\/[\w\.\/]+)/, '<span id="hash">$1</span>')
    .replace(/\n/g, '<br />');
    return comment;
    
    
  }

  const commentRef = createRef(null);
  const downloadRef = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(commentRef.current)
  useEffect(() => {
    if (image) {
      downloadRef.current.click();
    }
  })
  return (
  
    <div>
        <div className='block bg-[#181818] mx-auto w-[30%] text-white rounded-sm p-[1rem] mt-10 justify-center' id="comment" ref={commentRef}>
          <img src={avatar ? avatar : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Smile_Lirion.svg/1200px-Smile_Lirion.svg.png'} className='flex rounded-full mr-4 w-[40px] h-[40px] '/>
          <div className='mt-[-38px] ml-14'>
          <b className='w-full'>{username ? username : 'A User'}</b>
          <span className='ml-2 mt-[0.10rem] w-full  text-[#AAAA] text-sm'>{ date ? date : '2 years ago'}</span>
          </div>
          <p className='ml-14' 
          dangerouslySetInnerHTML={{
            __html:
              (comment && realizedComment(comment)) ||
              'wow, amazing video.'
          }}
          />
          <div className='flex ml-14 mt-3' id="buttons">
            <LikeButton />
            <span className='ml-2 text-sm mt-[-1px] text-[#AAAAAA]' id='counter'>{ likeCount ? likeCount : 31 }</span>
            <div className='ml-4'>
            <DislikeButton />
          </div>
          <span className='ml-8 text-sm mt-[-2px] text-[#AAAAAA] font-medium'>REPLY</span>
          </div>
        </div>
        <a id="download" className='cursor-pointer' onClick={getImage} ref={downloadRef} href={image} download="fake-comment-generator.jpg">
          Download
        </a>
    </div>
  )
}

export default Comment