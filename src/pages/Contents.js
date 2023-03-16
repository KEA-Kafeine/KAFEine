import { forwardRef, useRef } from "react";

const Contents = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <header>
        <p className="logo">KAFEine</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1>Contents </h1>
          <p>추가 컨텐츠 페이지.</p>
          <a href="https://github.com/KEA-Kaffeine" className="cta">
            github
          </a>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Contents;
