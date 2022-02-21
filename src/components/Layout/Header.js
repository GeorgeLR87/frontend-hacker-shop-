// ./client/src/Layout/Header.js
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContex";

export default function Header() {
  const ctx = useContext(UserContext);

  const { 
    verifyingToken, 
    logoutUser, 
    authStatus 
  } = ctx;

  useEffect(() => {
    verifyingToken();
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-700 to-gray-800">
      <nav className="w-full h-15 p-1">
        <div className="flex flex-row pb-1 ">
          <div className="flex flex-row justify-center items-center w-10/12 pl-28">
            <Link to="/">
              <img
                className="h-11 grid grid-cols-3 gap-4"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUOFB4A6mT///8AAAALERwOABgABRQABhb6+vtTVlsHtFAA7mUHrU4OABsPABYA52Pc3d0AAA8AAAbX19imp6r09PUeIysKgD4KdjsHsU/DxMaTlJfm5ucUGiMKcDkcwJDzAAABFklEQVR4nO3cvVKDQBSAUQRiUIwY4m/UvP9jpogU4WYcZouV4Dklews+yp3hFgUAAAAAAAAAAAAAAAAAAAAAgyqaNFQPZ5tUuQJ3ZXOu3IXE6jkMvbz+JG7e2i5F+54nsV6XUSx8ikN3t6ez1X17k6L9WGUqbP6q8EGhQoUKFSpUqFChQoUKFSpUqFChQoUK519Yjyi8usJJFCpUqFChQoUKFSpUqFChQoWzLwyPLn2Fqy6stiOLu6dZ/k3UP7gvVahQoUKFChUqVKhQoUKFChUqVKhQocJYGN99Wf/jF9U+rEvYh8L+czzUfH0POxUOSSsVuu6QbW3ElL0Y/W97MR7T5AoEAAAAAAAAAAAAAAAAAAAAmLUjSkxXL4VH7TgAAAAASUVORK5CYII="
                alt=""
              />
            </Link>

            <h1 className="text-green-600 font-black text-xl pl-5 justify-cneter">
              HackerShop
            </h1>
          </div>

          <div className="h-15 w-2/12 flex justify-end items-center pr-20">
            <Link
              to="/products"
              className="text-base font-medium text-white hover:text-indigo-50 pr-10"
            >
              Products
            </Link>

            {
            authStatus ? 
              <>
                <Link
                  to="products/create"
                  className="text-base font-medium text-white hover:text-indigo-50 pr-10"
                >
                  Create
                </Link>

                <a
                  onClick={() => logoutUser()}
                  href="/"
                  className="text-base font-medium text-white hover:text-indigo-50 pr-10"
                >
                  Logout
                </a>
              </>
             : 
              <>
                <Link
                  to="/users/create"
                  className="text-base font-medium text-white hover:text-indigo-50 pr-10"
                >
                  Register
                </Link>

                <Link
                  to="/users/login"
                  className="text-base font-medium text-white hover:text-indigo-50 pr-10"
                >
                  Login
                </Link>
              </>
            }
          </div>
        </div>
      </nav>
    </header>
  );
}

