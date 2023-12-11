import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    margin-right: 15px;
  }

  img {
    border-radius: 50%;
    vertical-align: middle;
  }

  .content {
    flex: 1;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
  }
`;