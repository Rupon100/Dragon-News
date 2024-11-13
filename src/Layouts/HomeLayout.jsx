import Header from "../Components/Header.";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layout-Components/LeftNavbar";
import RightNavbar from "../Components/Layout-Components/RightNavbar";
import Navbar from "../Components/Navbar";

 

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
              <Header></Header>
              <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
              </section>
            </header>
            <nav>
                <section className="w-11/12 mx-auto py-4">
                  <Navbar></Navbar>
                </section>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid gap-3 md:grid-cols-12">
               <aside className="col-span-3">
                <LeftNavbar></LeftNavbar>
               </aside>
               <section className="col-span-6">main content</section>
               <aside className="col-span-3">
                <RightNavbar></RightNavbar>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;