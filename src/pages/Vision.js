import { forwardRef } from "react";
// import styled from "styled-components";
import cup from "../contents/coffee-splash.jpeg";
import cup2 from "../contents/coffee_hand.jpeg";
import visionlogo from "../contents/ourvision.png";

// const Section = styled.section`
//   background: #221f26;
//   width: 100%;
  
//   h2 {
//     font-size: clamp(2.5rem, -0.875rem + 8.333vw, 3rem);
//     font-weight: 800;
//     text-transform: uppercase;
//     color: white;
//     line-height: 89%;
//   }
  
//   p {
//     font-size: clamp(2rem, -0.875rem + 8.333vw, 2.8rem);
//     width: 90%;
//   }
// `;

const Vision = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="cv">
        <div className="content">
          <img className="vision-logo" src={visionlogo} alt=''/>
          <br />
          <br />
          <h1 className="wakeup">Wake Up!</h1>
          <h3 className="wakeup-kor">깨어나라!</h3>

          <p className="wakeup-des">
            누구에게나 어디서든 하루의 일상에서
            <br />
            당연하게 사용되는 곁에 있는 서비스가 되겠습니다.
          </p>

          <img className="cup" src={cup} alt=''/>

          <h1 className="text-anywhere">Hands On!</h1>
          <p className="text-anywhere-des">
            손 안의 커피 한잔처럼, <br /> 편리한 서비스를 언제 어디서든
            제공하겠습니다.{" "}
          </p>
          <img className="cup2" src={cup2} alt=''/>
        </div>
      </div>
    </section>
  );
});

export default Vision;
