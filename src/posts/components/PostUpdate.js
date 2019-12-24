import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'

const DUMMY_POSTS = [{
    id: 'post1',
    title: 'Title Example',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
    imageUrl: 'http://localhost:3000/sample-post.jpg',
    user: 'Walter White',
    date: new Date().toLocaleDateString()
  },
  {
    id: 'test2',
    title: 'Title Example',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt pretium fringilla. Etiam vitae est et tortor tristique cursus. Nam consequat velit eget ante tempor tincidunt. Donec velit nisi, posuere lacinia feugiat non, porta sit amet sem. Etiam euismod imperdiet maximus. Quisque eu diam ut massa mollis rhoncus. Pellentesque sit amet velit at elit rhoncus consequat ut eu diam. Ut eleifend ligula nisi, sit amet pellentesque odio vestibulum at. Nullam bibendum diam et velit auctor accumsan.',
    imageUrl: 'http://localhost:3000/sample-post.jpg',
    user: 'Walter White',
    date: new Date().toLocaleDateString()
  }
];

const PostUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const postId = useParams().postId;

  const [formState, inputHandler, setFormData] = useForm({
      title: {
        value: '',
        isValid: false
      },
      body: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPost = DUMMY_POSTS.find(p => p.id === postId);

  useEffect(() => {
    if(identifiedPost) {
      setFormData({
          title: {
            value: identifiedPost.title,
            isValid: true
          },
          body: {
            value: identifiedPost.body,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPost]);

  const postUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPost) {
    return (
      <div className="w-full p-3 bg-white border rounded shadow">
        <p>Could not find post!</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="w-full p-3" onSubmit={postUpdateSubmitHandler}>
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <Input
            id="title"
            element="input"
            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            value={identifiedPost.title}
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
        </div>
        <div className="p-4">
          <Input
            id="body"
            className="w-full p-4 border"
            validators={[VALIDATOR_MINLENGTH(20)]}
            errorText="Please enter a valid text (at least 20 characters)."
            value={identifiedPost.body}
            rows="6"
            onInput={inputHandler}
            initialValue={formState.inputs.body.value}
            initialValid={formState.inputs.body.isValid}
            >
            </Input>
        </div>
        <div className="p-4 clearfix">
          <button
            className = {
              `bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right`
            }
            type="submit"
            disabled={!formState.isValid}
          >
            Submit Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostUpdate;
