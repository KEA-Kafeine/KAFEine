import { forwardRef, useRef } from "react";

const Contents = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="cv">
        <div className="content">
          <h1>Contents</h1>
          <p>추가 컨텐츠 페이지.</p>
          <img src="https://ghchart.rshah.org/11chyeonjin" />
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Contents;
