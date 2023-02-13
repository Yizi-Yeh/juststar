import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfoWrapper>
        <FooterInfo>
          <Text>農業資訊站</Text>
          <SmallerText>地址：新北市新店區北新路三段200號9樓</SmallerText>
          <SmallerText>電話：886-2-8195-8623</SmallerText>
        </FooterInfo>
      </FooterInfoWrapper>
      <CopyrightText>Copyright © 2022 NCDR ALL RIGHTS RESERVED.</CopyrightText>
      <MobileCopyrightText>Copyright © 2022 NCDR </MobileCopyrightText>
      <MobileCopyrightText>ALL RIGHTS RESERVED.</MobileCopyrightText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;

const FooterInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 227px;
`;

const Text = styled.span`
  &:nth-child(1) {
    margin-bottom: 27px;
  }
`;

const SmallerText = styled(Text)`
  font-size: 16px;
`;

const CopyrightText = styled.span`
  font-size: 16px;
`;
const MobileCopyrightText = styled.span`
  display: none;
  font-size: 16px;
`;

export default Footer;
