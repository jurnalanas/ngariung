import React from 'react'
import Table from './Table'
import CardsMedium from './CardsMedium'
import CardsLarge from './CardsLarge'
import PostsLists from './PostsLists'

const Contents = () => {
  const ITEMS = [
    {
      id: 'test',
      title: 'Title Example',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
      imageUrl: "https://picsum.photos/600/200/?random",
      user: 'Walter White',
      date: new Date().toLocaleDateString()
    },
    {
      id: 'test2',
      title: 'Title Example',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
      imageUrl: "https://picsum.photos/600/200/?random",
      user: 'Walter White',
      date: new Date().toLocaleDateString()
    }
  ];

  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">
      <PostsLists items={ITEMS}/>
      <CardsMedium/>
      <CardsMedium/>
      <CardsMedium/>
      <Table/>
    </div>
  )
}

export default Contents;
