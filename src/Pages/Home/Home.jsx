import Container from '../../Components/Container/Container';
import DesignSolution from '../../Components/DesignSolution/DesignSolution';
import HeroSection from '../../Components/HeroSection/HeroSection';
import './Home.css'

const Home = () => {
    return (
		<div>
			<HeroSection />
			<DesignSolution />
		</div>
	);
};

export default Home;