import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'

const PostSubmit = () => {
  const [formState, inputHandler] = useForm(
    {
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

  const postSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="w-full p-3" onSubmit={postSubmitHandler}>
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <Input
            id="title"
            element="input"
            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Post Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
          />
        </div>
        <div className="p-4">
          <Input
            id="body"
            className="w-full p-4 border"
            placeholder="Write your story here."
            validators={[VALIDATOR_MINLENGTH(20)]}
            errorText="Please enter a valid text (at least 20 characters)."
            rows="6"
            onInput={inputHandler}
            >
            </Input>
        </div>
        <div className="p-4 clearfix">
          <button
            className = {
              `bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right ${!formState.isValid && "opacity-50 cursor-not-allowed"}`
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

export default PostSubmit;
