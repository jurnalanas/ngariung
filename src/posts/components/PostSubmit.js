import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const PostSubmit = () => {
  return (
    <form className="w-full p-3">
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <Input
            element="input"
            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="post-title"
            placeholder="Post Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
          />
        </div>
        <div className="p-4">
          <Input
            className="w-full p-4 border"
            id="post-body"
            placeholder="Write your story here."
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid text"
            rows="6">
            </Input>
        </div>
        <div className="p-4 clearfix">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
            Submit Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostSubmit;
