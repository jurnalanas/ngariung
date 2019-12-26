import React, { useState, useContext } from 'react';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();


  const [formState, inputHandler, setFormData] = useForm({
      username: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.username.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData({
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            username: formState.inputs.username.value,
            password: formState.inputs.password.value
          }), {
            'Content-Type': 'application/json'
          }
        );
        auth.login(responseData.user.id);
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            username: formState.inputs.username.value,
            password: formState.inputs.password.value
          }), {
            'Content-Type': 'application/json'
          }
        );

        auth.login(responseData.user.id);
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="w-full max-w-xs">
        {isLoading && <LoadingSpinner asOverlay />}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={authSubmitHandler}>
          <h2 className="py-2">Login Required</h2>
          {!isLoginMode && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <Input
                element="input"
                id="name"
                type="text"
                label="Your Name"
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a name."
                onInput={inputHandler}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <Input
              element="input"
              id="username"
              type="username"
              label="Username"
              placeholder="Username"
              validators={[VALIDATOR_MINLENGTH(5)]}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              errorText="Please enter a valid Username, at least 5 characters."
              onInput={inputHandler}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              placeholder="******************"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password, at least 5 characters."
              onInput={inputHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!formState.isValid}>
              {isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </button>

            {/* <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="#">
              Forgot Password?
            </Link> */}
          </div>
        </form>
        <button
          className = "text-xs font-bold py-2 px-4"
          onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </button>
      </div>
    </React.Fragment>
  )
}

// TODO: handle forgot password

export default LoginForm;
