import styled from "styled-components";

const About = () => {

  return (
    <>
      <Container>
        <Title><h2>حول</h2></Title>

        <Content>
          <img src="https://static1.s123-cdn-static-a.com/uploads/6877419/800_634428fc362df.jpg" alt="nmanim" />
          <p> نمانيم ده اسمنا وشغلنا احنا بننفذ افكار بسيطه في حاجات لطيفه وبسيطه زي الجوابات او الاكسسوارات كمان بنساعدك في جعل هديتك الطف ما يكون وبنختار سوا الحاجه اللي تبسطك وحتى لو عجبتك حاجه معينه بسعر فلكي في مكان تاني بنحاول ننفذها بسعر اقل كتير وشكل لطيف وخامات نضيفه كل اللي عليك تبعتلنا بالفكره اللي ف بالك وتسيب الباقي علينا
          </p>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-inline: 10vw;
  background-image: linear-gradient(35deg, #434344, #232324);
  height: 100vh;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    margin: 25px 15px;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0;
    flex-direction: column;
  }

  img {
    width: 35vw;
    height: 350px;
    border-radius: 4px;
    
    @media (max-width: 768px) {
      width: 100%;
      height: 250px;
    }
  }
  p {
    direction: rtl;
    border-radius: 10px;
    font-size: 2.2vw;
    line-height: 1.5;
    color: #f1eeee;
    margin-left: 25px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`

export default About