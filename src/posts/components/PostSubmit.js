import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const PostSubmit = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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

  const history = useHistory();

  const postSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/posts',
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          body: formState.inputs.body.value,
          image: "http://localhost:3000/sample-post.jpg",
          date: new Date().toDateString(),
          creator: auth.userId
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
      <form className="w-full p-3" onSubmit={postSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
    </React.Fragment>
  )
}

export default PostSubmit;
