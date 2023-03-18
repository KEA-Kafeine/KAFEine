import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <header>
        <p className="logo">K A F E i n e</p>
      </header>
      <div className="cv">
        <div className="content">
          <h1>You Can't Quit Me! </h1>
          <p>
            당신에게 꼭 필요하게 될.
            <br />
            가천 카카오
            <br />
            엔터프라이즈 아카데미 <br />
            2기 팀 카페인
          </p>
        </div>
      </div>
      <script async src="index.js"></script>
    </section>
  );
});

export default Home;
