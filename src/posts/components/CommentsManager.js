import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';


const CommentsManager = () => {
  const [formState, inputHandler] = useForm({
      comment: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const commentSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <div className="w-full p-3">
      <form className="border rounded shadow p-3" onSubmit={commentSubmitHandler}>
        <div className="mb-4">
            <h2 className="text-black font-bold">Comments</h2>
        </div>
        <Input
          id="comment"
          placeholder="Add a comment"
          className="bg-grey-lighter border rounded leading-normal resize-none w-full py-2 px-3"
          type="text"
          label="Add a commnet"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText = "Please enter a text, at least 5 characters."
          onInput={inputHandler}
        />
        <div className="mt-3">
            <button
              className="border border-blue bg-blue hover:bg-blue-dark py-2 px-4 rounded tracking-wide mr-1"
              type="submit"
            >Submit</button>
            <button className="border border-grey-darker text-grey-darker hover:bg-grey-dark hover:text-white py-2 px-4 rounded tracking-wide ml-1">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default CommentsManager;
