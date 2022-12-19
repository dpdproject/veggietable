import React from "react";
import "./css/home.css";
import "animate.css";

import AnimatedPage from "../AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <main className="home">
        <span className="home--circle"></span>
        <section className="home--info">
          <h1>
            <span className="cook animate__animated animate__fadeInLeft">
              Cook
            </span>
            <span className="with animate__animated animate__fadeInRight animate__delay-1s">
              with
            </span>
            <span className="colors animate__animated animate__fadeInLeft animate__delay-2s">
              colors
            </span>
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-3s">
            Veggie is colors and flavors
            <br />
            Be Veggie!
          </p>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default Home;
