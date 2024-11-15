import Header from "./Header.";
import Navbar from "./Navbar";

 

const Latest = () => {
    return (
        <div>
            <header className="w-11/12 mx-auto space-y-3">
                <Header></Header>
                <Navbar></Navbar>
                <div>
                    <h1 className="text-center p-4 text-2xl font-semibold">Latest News Section!</h1>
                </div>
            </header>
        </div>
    );
};

export default Latest;