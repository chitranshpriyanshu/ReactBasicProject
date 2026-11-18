import React from 'react'

 function Cards({username="Undefined",about="Okay"}) {
  return (
<div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
        <div>
          <img 
            className="size-48 shadow-xl rounded-md" 
            alt="Reindeer" 
            src="https://images.pexels.com/photos/34811581/pexels-photo-34811581.jpeg"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-medium">{username}</span> 
          <span className="font-medium text-sky-500">{about}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>  )
}






export default Cards
