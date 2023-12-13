/* eslint-disable no-unused-vars */
import React from 'react'
import Link from '../elements/link/Link'

export default function Footer(){
	return(
		<footer className="w-full left-0 bottom-0 bg-indigo-900 py-7 mt-9">
			<div className="container mx-auto">
				<div className="flex flex-col items-center">
					<div className="flex items-center mb-3">
						<Link to="/" style="items-center mb-5 sm:mb-0 hidden sm:flex">
							
							<span className="font-montserrat ml-1 font-bold text-white">Online shop</span>
						</Link>
					</div>
					
				</div>
			</div>
		</footer>
	)
}