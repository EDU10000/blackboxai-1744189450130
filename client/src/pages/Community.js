import React, { useState } from 'react';
import PostCard from '../components/PostCard';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Alex M.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Just completed my first beach cleanup today! So rewarding to see the difference we made in just a few hours. #OceanProtection',
      likes: 24,
      comments: 5,
      timestamp: '2 hours ago',
      liked: false
    },
    {
      id: 2,
      user: 'Jamie L.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Looking for volunteers to help with our food drive this weekend. We need help sorting and packing donations. DM me if interested!',
      likes: 12,
      comments: 3,
      timestamp: '1 day ago',
      liked: true
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newPostObj = {
      id: posts.length + 1,
      user: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: newPost,
      likes: 0,
      comments: 0,
      timestamp: 'Just now',
      liked: false
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Community</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            rows="3"
            placeholder="Share your volunteering experience..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        {posts.map(post => (
          <PostCard 
            key={post.id} 
            post={post} 
            onLike={() => handleLike(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
