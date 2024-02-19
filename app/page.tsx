import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import WhatDoIDo from "./Components/WhatDoIDo";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {
  return (
  <>
    <div className="bg-black overflow-x-hidden">
        <Header />
          <Profile />
            <Skills />
              <WhatDoIDo />
                <About />
                    <Footer />
      </div>
  </>
  );
}
