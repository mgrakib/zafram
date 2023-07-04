import Container from '../../Components/Container/Container';
import DesignSolution from '../../Components/DesignSolution/DesignSolution';
import HeroSection from '../../Components/HeroSection/HeroSection';
import RecentWork from '../../Components/RecentWork/RecentWork';
import './Home.css'

const Home = () => {
    return (
		<div>
			<HeroSection />
			<DesignSolution />
			<RecentWork />
		</div>
	);
};

export default Home;