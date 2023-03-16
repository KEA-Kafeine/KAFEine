import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <header>
        <p className="logo">KAFEine</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1>You Can't Quit Me! </h1>
          <p>당신에게 꼭 필요한.</p>
          <a href="https://github.com/KEA-Kaffeine" className="cta">
            github
          </a>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Home;
