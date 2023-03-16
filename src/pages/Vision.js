import { forwardRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #221f26;
  width: 100%;
  
  h2 {
    font-size: clamp(2.5rem, -0.875rem + 8.333vw, 3rem);
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    line-height: 89%;
  }
  
  p {
    font-size: clamp(2rem, -0.875rem + 8.333vw, 2.8rem);
    width: 90%;
  }
`;

const Vision = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <div className="cv">
        <div className="content">
          <h1>Our Vision</h1>
          <br/>
          <h2>Wake Up!</h2>
          <p>
            깨어나라!
            <br/>하루의 커피가 당신의 하루를 각성시켜주듯이
            <br/>당신의 생활을 책임져 줄 수 있는 
            <br/>일상을 제공하겠습니다.
          </p>
          <h2>Anywhere, Anytime</h2>
          <p>
            커피 한잔처럼.. 
            <br/>누구에게나 어디서든 하루의 일상에서
            <br/>당연하게 사용되는 곁에 있는 서비스가 되겠습니다.
          </p>
        </div>
      </div>
    </Section>
  );
});

export default Vision;
