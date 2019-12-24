import React from 'react';

import PostItem from '../components/PostItem';
import MainNavigation from '../../shared/components/Navigation/MainNavigation';
import CommentsManager from '../components/CommentsManager';
import CommentItem from '../components/CommentItem';
import { useParams } from 'react-router-dom';

const POSTS = [{
    id: 'post1',
    title: 'Title Example',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
    imageUrl: 'http://localhost:3000/sample-post.jpg',
    user: 'Walter White',
    date: new Date().toLocaleDateString(),
    responses: [{
      reaction: 'happy',
      comment: 'this is cool'
    }]
  },
  {
    id: 'test2',
    title: 'Title Example',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.', //TODO: parse dulu
    imageUrl: 'http://localhost:3000/sample-post.jpg',
    user: 'Walter White',
    date: new Date().toLocaleDateString(),
    commentsId: ['comment1']
  }
];

const Post = () => {
  const postId = useParams().postId;
  const loadedItem = POSTS.filter(post => post.id === postId)[0];

  if(loadedItem) {
    return (
      <div>
        <MainNavigation/>
        <div className="container w-full mx-auto pt-2">
          <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <div className="flex flex-row flex-wrap flex-grow mt-2">
              <PostItem post={loadedItem} show={true}/>
            </div>
            <div className="flex flex-row flex-wrap flex-grow mt-2">
              <CommentItem postId={postId}/>˝
            </div>
            <div className="flex flex-row flex-wrap flex-grow mt-2">
              <CommentsManager/>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <MainNavigation/>
        <div className="container w-full mx-auto pt-2">
          <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            <div className="flex flex-row flex-wrap flex-grow mt-2">
              <PostItem show={false}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
