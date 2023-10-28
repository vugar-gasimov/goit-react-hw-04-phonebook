import styled, { keyframes } from 'styled-components';

const rotateHue = keyframes`
  to {
    filter: hue-rotate(1turn);
  }
`;

export const PhoneBookContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;

  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const PhoneBookTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
  margin-bottom: 16px;
`;

export const PhoneBookInputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const PhoneBookInputLabel = styled.p`
  display: flex;
  flex: 1;
  font-size: 18px;
  color: #333;
  margin: 0;
  margin-top: 8px;
`;

export const PhoneBookInput = styled.input`
  flex: 3;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const PhoneBookButton = styled.button`
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }
  flex: 1;
  width: fit-content;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;
  margin-top: 8px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }
`;

export const PhoneBookContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PhoneBookContactItem = styled.li`
  font-size: 16px;
  margin: 8px 0;
`;

export const PhoneBookContactTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
  margin-bottom: 16px;
`;

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }

  width: fit-content;
  background-color: #007bff;

  transition: background-color 0.3s;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }

  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
// ====================================================
const Card = styled.div`
  position: relative;
  width: 190px;
  height: 254px;
  background: lightgrey;
  box-shadow: 0 15px 40px -5px #d11bff42;
  z-index: 1;
  border-radius: 21px;
  overflow: hidden;
`;

const Content = styled.div`
  background: linear-gradient(
    rgba(255, 255, 255, 0.473),
    rgba(150, 150, 150, 0.25)
  );
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 21px;
`;

const Blob = styled.div`
  position: absolute;
  z-index: -1;
  border-radius: 5em;
  width: 200px;
  height: 200px;
`;

const Blob1 = styled(Blob)`
  left: -50px;
  top: -90px;
  background: #ff930f;
`;

const Blob2 = styled(Blob)`
  left: 110px;
  top: -20px;
  z-index: -1;
  background: #bf0fff;
`;

const Blob3 = styled(Blob)`
  left: -40px;
  top: 100px;
  background: #ff1b6b;
`;

const Blob4 = styled(Blob)`
  left: 100px;
  top: 180px;
  background: #0061ff;
`;

const YourComponent = () => {
  return (
    <Card className="card">
      <Content className="card__content"></Content>
      <Blob1 className="blob"></Blob1>
      <Blob2 className="blob"></Blob2>
      <Blob3 className="blob"></Blob3>
      <Blob4 className="blob"></Blob4>
    </Card>
  );
};
