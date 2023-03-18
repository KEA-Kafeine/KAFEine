import { forwardRef } from "react";
import coffee from "../contents/coffee_bean2.svg";
const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <header>
        <p className="logo">KAFEine</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1 className="maintext">You Can't Quit Us!</h1>

          <p className="text-need">
            당신에게 꼭 필요한, <br /> &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;없어서는 안 될{" "}
          </p>
          <div className="coffee-container">
            <img className="coffee" src={coffee} />
          </div>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Home;
