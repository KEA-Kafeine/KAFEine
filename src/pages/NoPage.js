import { forwardRef } from "react";

const NoPage = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div class="cv">
        <div class="content" id="nopage">
          <h1>404 Error </h1>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default NoPage;
