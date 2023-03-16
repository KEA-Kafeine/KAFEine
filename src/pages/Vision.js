import { forwardRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #221f26;
  width: 100%;
`;

const Vision = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <header>
        <p className="logo">Kaffe-in</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1>Our Vision</h1>
          <br />
          <h1>Wake Up!</h1>
          <p>
            깨어나라! 하루의 커피가 당신의 하루를 각성시켜주듯이
            <br />
            당신의 생활을 책임져 줄 수 있는 일상을 제공하겠습니다.
          </p>
          <h1>Anywhere, Anytime</h1>
          <p>
            커피 한잔처럼.. 누구에게나 어디서든 하루의 일상에서
            <br />
            당연하게 사용되는 곁에 있는 서비스가 되겠습니다.
          </p>
          <a href="https://github.com/KEA-Kaffeine" className="cta">
            github
          </a>
        </div>
      </div>
    </Section>
  );
});

export default Vision;
