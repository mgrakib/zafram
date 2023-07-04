import Container from "../Container/Container";
import recentImage from '../../Assets/images/recent_work.png'

import './RecentWork.css'
const RecentWork = () => {
    return (
		<div className='py-[20px] md:py-[80px] bg-[#F0F1E3]'>
			<Container>
				<div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center'>
					<div className='w-full md:w-1/2  md:pr-10'>
						<img
							src={recentImage}
							alt=''
							className='w-full'
						/>
					</div>

					<div className='w-full md:w-1/2 md:pl-10'>
						<p className='mb-[15px]'>Our Agency Skills</p>
						<h1 className='text-[28px] font-[600] mb-[15px]'>
							We Check this skill of our recent works
						</h1>
						<p className='text-[12px] mb-[15px]'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eveniet, facilis! Porro cumque aliquid nisi
							dolores. Aliquam repudiandae voluptatibus placeat
							nisi quisquam, iusto quaerat quasi, qui sint libero
							quod, officia necessitatibus!
						</p>

						<div className='flex flex-col gap-3'>
							<div>
								<div className='flex items-center justify-between mb-2 text-gray-color'>
									<p>Business Development</p>
									<span>80%</span>
								</div>
								<div>
									<div className='w-full h-[8px] bg-[#F5DD9F] rounded-md relative div-after after:left-[80%] after:text-[#FFAF01]'>
										<div className='absolute w-[80%] h-[50%] bg-[#FFAF01]  rounded-md left-[2px] top-1/2 -translate-y-1/2'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='flex items-center justify-between mb-2 text-gray-color '>
									<p>Business Analysis Data</p>
									<span>90%</span>
								</div>
								<div>
									<div className='w-full h-[8px] bg-[#ACC8B9] rounded-md relative div-after after:left-[90%] after:text-[#0B6855]'>
										<div className='absolute w-[90%] h-[50%] bg-[#0B6855]  rounded-md left-[2px] top-1/2 -translate-y-1/2'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='flex items-center justify-between mb-2 text-gray-color'>
									<p>Web Design Development</p>
									<span>70%</span>
								</div>
								<div>
									<div className='w-full h-[8px] bg-[#AFC2EC] rounded-md relative div-after after:left-[70%] after:text-[#1351FC]'>
										<div className='absolute w-[70%] h-[50%] bg-[#1351FC]  rounded-md left-[2px] top-1/2 -translate-y-1/2'></div>
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

export default RecentWork;