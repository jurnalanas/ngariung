import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const PostUpdate = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPost, setLoadedPost] = useState();
  const postId = useParams().postId;
  const history = useHistory();

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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/${postId}`
        );
        setLoadedPost(responseData.post);
        setFormData({
            title: {
              value: responseData.post.title,
              isValid: true
            },
            body: {
              value: responseData.post.body,
              isValid: true
            }
          },
          true
        );

      } catch (err) {}
    };
    fetchPost();
  }, [sendRequest, postId, setFormData]);

  const postUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/posts/${postId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          body: formState.inputs.body.value
        }), {
          'Content-Type': 'application/json'
        }
      );
      history.push('/' + auth.userId + '/posts');
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="text-center flex justify-center content-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedPost && !error) {
    return (
      <div className="w-full p-3 bg-white border rounded shadow">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPost && (
        <form className="w-full p-3" onSubmit={postUpdateSubmitHandler}>
          <div className="bg-white border rounded shadow">
            <div className="border-b p-3">
              <Input
                id="title"
                element="input"
                className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                value={loadedPost.title}
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
                value={loadedPost.body}
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
      )}
    </React.Fragment>
  )
}

export default PostUpdate;
