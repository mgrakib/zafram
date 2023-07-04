/** @format */

import Container from "../Container/Container";
import desingIMg from '../../Assets/images/design_.png'
import trangleShape from '../../Assets/images/trangle_shape.png'
import lineShape from '../../Assets/images/line_shape.png'

const DesignSolution = () => {
	return (
		<div className='py-[20px] md:py-[80px] relative'>
			<Container>
				<div className='flex flex-col md:flex-row items-center gap-10'>
					<div className='w-full md:w-1/2 pr-10'>
						<p>About the company</p>
						<h4 className='text-[28px] md:text-[42px] font-[600] leading-[32px] md:leading-[48px] mt-[15px]'>
							We provide the best desing solution
						</h4>

						<p className='mt-[15px]'>
							Our passion for sustainability has driven us to
							refine our proce leaders in web sustainability and
							performance hlping to shift towards a zero-carbon
							future.
						</p>

						<div className='my-[15px]'>
							<ul className='flex flex-col md:flex-row md:items-center flex-wrap'>
								<li className='w-full py-1 md:w-1/2'>
									Business Advisory
								</li>
								<li className='w-full py-1 md:w-1/2'>
									Business Consulting
								</li>
								<li className='w-full py-1 md:w-1/2'>
									Responsibility Of Corporate
								</li>
								<li className='w-full py-1 md:w-1/2'>
									Innovative Ideas
								</li>
							</ul>
						</div>

						<div>
							<button className='bg-action-color py-2 px-4 rounded-md'>
								Read More{" "}
							</button>
						</div>
					</div>

					<div className='w-full md:w-1/2 bg-red-500'>
						<img
							src={desingIMg}
							alt=''
							className='w-full'
						/>
					</div>
				</div>
			</Container>

			<div>
				<img
					src={trangleShape}
					alt=''
					className='absolute hidden md:block md:top-[20%] right-0'
				/>
				<img
					src={lineShape}
					alt=''
					className='absolute hidden md:block bottom-[20%]'
				/>
			</div>
		</div>
	);
};

export default DesignSolution;
