import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <header className="p-4 bg-gray-800 text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<h1 className="flex text-3xl font-bold items-center p-2">
			Learn MCQ
		</h1>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<NavLink to='/' className="flex items-center px-4 -mb-1 border-b-2 text-2xl font-semibold border-transparent">Topics</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/statistics' className="flex items-center px-4 -mb-1 border-b-2 text-2xl font-semibold border-transparent">Statistics</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/blog' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-2xl font-semibold">Blog</NavLink>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Header;


// className={({isActive})=> isActive ? 'active' : undefined}