import Container from "../Container/Container";
import { FaPhoneAlt, } from "react-icons/fa";
import { HiMail, HiMenu } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";



import englishFlag from '../../Assets/flag.png'
import logo from '../../Assets/logo.png'

import { NavLink } from "react-router-dom";

import './NavBar.css'
import { useState } from "react";

const NavBar = () => {
	const [isMenuShow, setIsMenuShow] = useState(false)
	const navItems = (
		<>
			<li className='navitem'>
				<NavLink>Home</NavLink>
			</li>
			<li className='navitem'>
				<NavLink>Projects</NavLink>
			</li>
			<li className='navitem'>
				<NavLink>Services</NavLink>
			</li>
			<li className='navitem'>
				<NavLink>Blog</NavLink>
			</li>
			<li className='navitem'>
				<NavLink>About</NavLink>
			</li>
			<li className='navitem'>
				<NavLink>Contact</NavLink>
			</li>
		</>
	);
    return (
		<div>
			{/* contact  */}
			<div className='bg-brand-color py-2 hidden md:block'>
				<Container>
					{/* contact info  */}
					<div className='text-white-color flex items-center justify-between'>
						<div className='flex items-center gap-4 '>
							<div className='flex items-center gap-1'>
								<FaPhoneAlt /> <span>+88 (5548) 6548</span>
							</div>
							<div className='flex items-center gap-1'>
								<HiMail /> <span>infoyour@gmail.com</span>
							</div>
							<div className='flex items-center gap-1'>
								<IoLocationSharp /> <span>+88 (5548) 6548</span>
							</div>
						</div>

						<div className='ml-auto'>
							<div className='flex items-center gap-1'>
								<div className='w-[40px]'>
									<img
										src={englishFlag}
										alt=''
										className=''
									/>
								</div>

								<select
									name=''
									id=''
									className='bg-transparent outline-none '
								>
									<option
										value='English'
										className='bg-brand-color'
									>
										English
									</option>
									<option
										value='Bangla'
										className='bg-brand-color'
									>
										Bangla
									</option>
								</select>
							</div>
						</div>
					</div>
				</Container>
			</div>

			{/* navitems  */}

			<nav className='mt-1'>
				<Container>
					<div className='flex items-center justify-between relative'>
						{/* logo  */}
						<div className='cursor-pointer'>
							<img
								src={logo}
								alt=''
							/>
						</div>

						{/* nav links  */}
						<ul className='hidden md:flex items-center justify-between '>
							{navItems}
						</ul>

						{/* btn  */}
						<div className='hidden md:block'>
							<button className='flex items-center gap-1 py-2 px-3 border border-gray-color rounded'>
								Let's Talk <BsArrowRight />
							</button>
						</div>

						<div className="md:hidden">
							<div
								onClick={() => setIsMenuShow(!isMenuShow)}
								className='text-[18px] cursor-pointer'
							>
								<HiMenu />
							</div>
						</div>

						<div
							className={`absolute shadow-2xl top-[110%] right-0 max-h-0 overflow-hidden duration-300 ${
								isMenuShow && "max-h-[600px] top-[100%]"
							}`}
						>
							<ul>{navItems}</ul>
						</div>
					</div>
				</Container>
			</nav>
		</div>
	);
};

export default NavBar;