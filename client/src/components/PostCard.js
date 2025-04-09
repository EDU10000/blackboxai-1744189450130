import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const PostCard = ({ post, onLike }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start mb-4">
        <img 
          src={post.avatar} 
          alt={post.user} 
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{post.user}</h3>
          <p className="text-gray-500 text-sm">{post.timestamp}</p>
        </div>
      </div>
      
      <p className="mb-4 text-gray-700">{post.content}</p>
      
      <div className="flex items-center text-gray-500">
        <button 
          className={`flex items-center mr-4 ${post.liked ? 'text-red-500' : ''}`}
          onClick={onLike}
        >
          <FontAwesomeIcon icon={faHeart} className="mr-1" />
          <span>{post.likes}</span>
        </button>
        <div className="flex items-center mr-4">
          <FontAwesomeIcon icon={faComment} className="mr-1" />
          <span>{post.comments}</span>
        </div>
        <button className="flex items-center">
          <FontAwesomeIcon icon={faShare} className="mr-1" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
