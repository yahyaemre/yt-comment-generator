import React from "react";


function EditComment({ setAvatar, setUsername, setDate, setLikeCount, setComment }) {

    const updateAvatar = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', function() {
              setAvatar(this.result);
            });
            reader.readAsDataURL(file);
    }

  return (
    <div>
        <h1 className="text-white font-semibold text-3xl mt-2 text-center">Edit the Comment</h1>
        <div className="flex bg-[#181818] mx-auto w-[26%] text-white rounded-md p-4 mt-4" id="editcomment">
            
            <div className="flex flex-col">
                <label>Username</label>
                    <input type="text" className="w-[300px] bg-[#181818] text-white  mb-2" placeholder="e.g. Elon Musk"
                        maxLength={25} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                <label>Date</label>
                    <input type="text" className="w-[300px] bg-[#181818] text-white mb-2" placeholder="e.g. 2 years ago" 
                        maxLength={20}
                        onChange={(e) => setDate(e.target.value)}
                    />
                <label>Comment</label>
                    <input type="text" className="w-[300px] bg-[#181818] text-white mb-2" placeholder="e.g. Omg, what a video." 
                        maxLength={700}
                        onChange={(e) => setComment(e.target.value)}
                    />
                <label>Like Count</label>
                    <input type="number" className="w-[300px] bg-[#181818] text-white mb-2" placeholder="e.g. 254" 
                        onChange={(e) => setLikeCount(e.target.value)}
                    />
                <label>Avatar</label>
                    <input type="file" className="w-[300px] mt-1 mb-2" onChange={updateAvatar}/>
            </div>
        </div>
        <br />
    </div>
  )
}

export default EditComment