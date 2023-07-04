/** @format */

import Container from "../Container/Container";
import "./HeroSection.css";
import img from '../../Assets/download.jpeg'

import heroImg from '../../Assets/images/hero.png'

const HeroSection = () => {
	return (
		<div className='bg-secondary-black'>
			<Container>
				<div className='py-[20px] md:py-[80px]'>
					<div className='flex flex-col md:flex-row items-center gap-5 md:gap-x-28'>
						<div className='w-full md:w-1/2'>
							<h1 className='text-white-color text-[26px] md:text-[48px] leading-[32px] md:leading-[45px]'>
								The Best Smrt Agency Consulting Business
								Solution
							</h1>
						</div>

						<div className='w-full md:w-1/2'>
							<p className='text-secondary-color text-[12px]'>
								When you need us for imporve your business, then
								come <br /> with us to help your business have
								reach it you just sit and <br /> feel that gole.
							</p>

							<div className='mt-5 text-center md:text-start'>
								<div className='py-2 px-4 bg-white-color inline-block rounded-full  '>
									<div className='flex items-center gap-3 text-start'>
										<div className='flex items-center'>
											<div className='w-[45px] h-[45px] rounded-full overflow-hidden border-[4px] border-white-color'>
												<img
													src={img}
													alt=''
													className='w-full h-full object-cover'
												/>
											</div>
											<div className='w-[45px] h-[45px] rounded-full overflow-hidden border-[4px] border-white-color -ml-4'>
												<img
													src={img}
													alt=''
													className='w-full h-full object-cover'
												/>
											</div>
											<div className='w-[45px] h-[45px] rounded-full overflow-hidden border-[4px] border-white-color -ml-4'>
												<img
													src={img}
													alt=''
													className='w-full h-full object-cover'
												/>
											</div>
											<div className='w-[45px] h-[45px] rounded-full overflow-hidden border-[4px] border-white-color -ml-4'>
												<img
													src={img}
													alt=''
													className='w-full h-full object-cover'
												/>
											</div>
										</div>

										<div>
											<h4 className='text-2xl'>36k+</h4>
											<p className='text-[12px]'>
												join Us Agency
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-[40px] md:mt-[80px]'>
						<div className='flex flex-col md:flex-row justify-between'>
							<div className='w-full md:w-2/3'>
								<div className="w-full h-full">
									<img
										src={heroImg}
                                        alt=''
                                        className="w-full  object-cover"
									/>s
								</div>
							</div>

							<div className='w-full md:w-1/3 md:px-10'>
                                <div className='p-3 md:p-6 bg-brand-color rounded-lg '>
                                    <div className="mb-3 border-b" >
                                        <h4 className="text-white-color text-2xl">16+</h4>
                                        <p className="text-secondary-color mb-3">Years of Experiences</p>
                                    </div>
                                    <div className="mb-3 border-b" >
                                        <h4 className="text-white-color text-2xl">16+</h4>
                                        <p className="text-secondary-color mb-3">Years of Experiences</p>
                                    </div>
                                    <div className="mb-3 border-b" >
                                        <h4 className="text-white-color text-2xl">16+</h4>
                                        <p className="text-secondary-color mb-3">Years of Experiences</p>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default HeroSection;
