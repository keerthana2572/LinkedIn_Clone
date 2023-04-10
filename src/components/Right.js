import styled from "styled-components";
const Right = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h3>Add to your feed</h3>
          <img src="/images/feed-icon.svg" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Icon />
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Icon />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" />
        </Recommendation>
      </FollowCard>
      <Banner>
        <img src="images/feed-image.jpeg" />
      </Banner>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  background-color: #fff;
  text-align: center;
  margin-bottom: 8px;
  border-radius: 4px;
  position: realtive;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
  padding: 12px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 16px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      border-radius: 16px;
      display: inline-flex;
      box-sizing: border-box;
      align-items: center;
      text-align: center;
      outline: none;
      max-height: 30px;
    }
  }
`;
const Icon = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 25px;
`;
const Recommendation = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const Banner = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Right;
