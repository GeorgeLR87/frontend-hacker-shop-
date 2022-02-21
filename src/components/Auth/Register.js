// ./client/src/Auth/Register.js
import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from './../../context/User/UserContex'


export default function Register() {

  const ctx = useContext(UserContext)

  const {
    registerUser
  } = ctx

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const handleChange = (e) => {
    e.preventDefault()

    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    registerUser(newUser)
  }
  
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUOFB4A6mT///8AAAALERwOABgABRQABhb6+vtTVlsHtFAA7mUHrU4OABsPABYA52Pc3d0AAA8AAAbX19imp6r09PUeIysKgD4KdjsHsU/DxMaTlJfm5ucUGiMKcDkcwJDzAAABFklEQVR4nO3cvVKDQBSAUQRiUIwY4m/UvP9jpogU4WYcZouV4Dklews+yp3hFgUAAAAAAAAAAAAAAAAAAAAAgyqaNFQPZ5tUuQJ3ZXOu3IXE6jkMvbz+JG7e2i5F+54nsV6XUSx8ikN3t6ez1X17k6L9WGUqbP6q8EGhQoUKFSpUqFChQoUKFSpUqFChQoUK519Yjyi8usJJFCpUqFChQoUKFSpUqFChQoWzLwyPLn2Fqy6stiOLu6dZ/k3UP7gvVahQoUKFChUqVKhQoUKFChUqVKhQocJYGN99Wf/jF9U+rEvYh8L+czzUfH0POxUOSSsVuu6QbW3ElL0Y/W97MR7T5AoEAAAAAAAAAAAAAAAAAAAAmLUjSkxXL4VH7TgAAAAASUVORK5CYII="
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          I have an Account &nbsp;
          <Link to="/login">
            <a className="font-medium text-green-600 hover:text-green-500">
              Log In
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form 
            onSubmit={(event) => { handleSubmit(event)}}
            className="space-y-6">
            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {handleChange(event)}}
                  name="name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {handleChange(event)}}
                  name="email"
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                 onChange={(event) => {handleChange(event)}}
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {handleChange(event)}}
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
