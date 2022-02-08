// ./client/src/Layout/Header.js
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="bg-gradient-to-r from-gray-700 to-gray-800">
			<nav className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        
        
				<div className="w-full py-6 flex items-center justify-between border-b border-gray-500 lg:border-none">
					<div className="flex items-center">

            <div className="ml-10 space-x-8 lg:block">
							<Link to="/products" className="text-base font-medium text-white hover:text-indigo-50">
								Products
							</Link>							
						</div>

						<Link to="/">
							<img className="h-10 w-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUOFB4A6mT///8AAAALERwOABgABRQABhb6+vtTVlsHtFAA7mUHrU4OABsPABYA52Pc3d0AAA8AAAbX19imp6r09PUeIysKgD4KdjsHsU/DxMaTlJfm5ucUGiMKcDkcwJDzAAABFklEQVR4nO3cvVKDQBSAUQRiUIwY4m/UvP9jpogU4WYcZouV4Dklews+yp3hFgUAAAAAAAAAAAAAAAAAAAAAgyqaNFQPZ5tUuQJ3ZXOu3IXE6jkMvbz+JG7e2i5F+54nsV6XUSx8ikN3t6ez1X17k6L9WGUqbP6q8EGhQoUKFSpUqFChQoUKFSpUqFChQoUK519Yjyi8usJJFCpUqFChQoUKFSpUqFChQoWzLwyPLn2Fqy6stiOLu6dZ/k3UP7gvVahQoUKFChUqVKhQoUKFChUqVKhQocJYGN99Wf/jF9U+rEvYh8L+czzUfH0POxUOSSsVuu6QbW3ElL0Y/W97MR7T5AoEAAAAAAAAAAAAAAAAAAAAmLUjSkxXL4VH7TgAAAAASUVORK5CYII=" alt="" />
						</Link>
            
            <h1 className='text-green-600 font-black text-2xl pl-5'>HackerShop</h1>
						
					</div>
				</div>
			</nav>
		</header>
	)
}