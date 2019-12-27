import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const CommentsManager = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm({
      comment: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const commentSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/comments',
        'POST',
        JSON.stringify({
          comment: formState.inputs.comment.value,
          date: new Date().toDateString(),
          creator: auth.userId,
          postId: props.postId,
          mood: 'happy' // TODO: mood feature
        }), {
          'Content-Type': 'application/json'
        }
      );
      history.push('/');
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="text-center flex justify-center content-center">
          <LoadingSpinner />
        </div>
      )}
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
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default CommentsManager;
