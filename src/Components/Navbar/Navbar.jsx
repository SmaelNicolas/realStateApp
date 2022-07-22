import React from "react";
import "./navbar.css";

export const Navbar = () => {
	return (
		<div className='navbar--container'>
			<ul className='navbar--ul'>
				<li className='navbar--li'>
					{" "}
					<a className='navbar--a' href='#1'>
						Home
					</a>
				</li>
				<li className='navbar--li'>
					<a className='navbar--a' href='#2'>
						Us
					</a>
				</li>
				<li className='navbar--li'>
					<a className='navbar--a' href='#3'>
						Contact
					</a>
				</li>
				<li className='navbar--li'>
					<a className='navbar--a' href='#4'>
						Account
					</a>
				</li>
			</ul>
		</div>
	);
};
