import React from 'react';
import { useParams } from 'react-router-dom';

import Contents from "../components/Contents";
import Table from "../components/Table";
import MainNavigation from '../../shared/components/Navigation/MainNavigation';

const DUMMY_POSTS = [{
    id: 'post1',
    title: 'Title Example',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
    imageUrl: 'http://localhost:3000/sample-post.jpg',
    user: 'Walter White',
    creator: 'user1',
    date: new Date().toLocaleDateString(),
    commentsId: ['comment1']
  },
  {
    id: 'test2',
    title: 'Title Example',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
    imageUrl: 'http://localhost:3000/sample-post.jpg',
    user: 'Walter White',
    creator: 'user2',
    date: new Date().toLocaleDateString(),
    commentsId: ['comment2']
  }
];
// TODO: ini jadi patokan api nanti

const UserPosts = () => {
  const userId = useParams().userId;
  const loadedPosts = DUMMY_POSTS.filter(place => place.creator === userId);

  return (
    <div>
      <MainNavigation/>
      <div className="container w-full mx-auto pt-2">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <Contents items={loadedPosts}/>
          <hr className="border-b-2 border-gray-400 my-8 mx-4" />
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default UserPosts;
