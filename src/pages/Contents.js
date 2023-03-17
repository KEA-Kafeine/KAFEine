import { forwardRef, useRef } from "react";
import Form from "./FormPage/Form";
const Contents = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <header>
        <p className="logo">KAFEine</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1>Contents </h1>
          <Form />
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Contents;
