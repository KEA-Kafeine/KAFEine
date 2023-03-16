import { forwardRef } from "react";

const NoPage = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <header>
        <p class="logo">Kaffe-in</p>
      </header>
      <div class="cv">
        <div class="content">
          <h1>404 Error </h1>
          <a href="https://github.com/KEA-Kaffeine" className="cta">
            github
          </a>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default NoPage;
