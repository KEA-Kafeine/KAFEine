import { forwardRef } from "react";
import coffee from "../contents/coffee_bean2.svg";
const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="cv">
        <div className="content">
          <h1 className="maintext">KAFEine,</h1>
          <h1 className="maintextEx">Brewing Everyday Moments</h1>

          <p className="text-need">일상생활에서 특별한 순간들을 만들어 내기 위해</p>
          <div className="coffee-container">
            <img className="coffee" src={coffee} alt="" />
          </div>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Home;
