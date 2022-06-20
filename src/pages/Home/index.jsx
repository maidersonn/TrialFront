import "./home.css";

const Home = () => {
    return (
        <div className="home_page">
            <header className="home_page_header">TRIAL</header>
            <h1 className="home_page_wellcome">Welcome to my coding trial !</h1>
            <p className="home_page_info">Here you can find a list of nominations and also you have the posibility to make new nominations.</p>
            <p className="home_page_info">Remember that only non rejected nominations are shown.</p>
        </div>

    );
};

export default Home;