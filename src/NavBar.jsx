import Container from "./Components/Container/Container";
import { FaPhoneAlt, } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

import englishFlag from '../src/Assets/flag.png'


const NavBar = () => {
    return (
		<div>
			<div className='bg-brand-color py-2'>
				<Container>
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
		</div>
	);
};

export default NavBar;