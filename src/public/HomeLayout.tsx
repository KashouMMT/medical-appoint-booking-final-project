import Navbar from "./component/Navbar";
import HomePage from "./content/HomePage";
import Footer from "./component/Footer";

const HomeLayout: React.FC = () => {
    return (
        <>
        <Navbar />
        <HomePage />
        <Footer />
        </>
    )
};

export default HomeLayout