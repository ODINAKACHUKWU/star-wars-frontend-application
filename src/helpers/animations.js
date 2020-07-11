import {
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceInDown,
  fadeIn,
  shake,
  tada,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  rubberBand,
  zoomIn,
} from "react-animations";
import styled, { keyframes } from "styled-components";

const BounceInLeft = styled.div`
  animation: 3s ${keyframes`${bounceInLeft}`};
`;

const Tada = styled.div`
  animation: 2s ${keyframes`${tada}`} infinite;
`;

const BounceInRight = styled.div`
  animation: 3s ${keyframes`${bounceInRight}`};
`;

const BounceInUp = styled.div`
  animation: 3s ${keyframes`${bounceInUp}`};
`;

const BounceInDown = styled.div`
  animation: 3s ${keyframes`${bounceInDown}`};
`;

const FadeIn = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;

const Shake = styled.div`
  animation: 2s ${keyframes`${shake}`};
`;

const SlideInUp = styled.div`
  animation: 2s ${keyframes`${slideInUp}`};
`;

const SlideInDown = styled.div`
  animation: 2s ${keyframes`${slideInDown}`};
`;

const SlideInLeft = styled.div`
  animation: 2s ${keyframes`${slideInLeft}`};
`;

const SlideInRight = styled.div`
  animation: 2s ${keyframes`${slideInRight}`};
`;

const RuberBand = styled.div`
  animation: 2s ${keyframes`${rubberBand}`};
`;

const ZoomIn = styled.div`
  animation: 2s ${keyframes`${zoomIn}`};
`;

export {
  BounceInLeft,
  BounceInRight,
  BounceInUp,
  BounceInDown,
  FadeIn,
  Shake,
  SlideInUp,
  SlideInDown,
  RuberBand,
  ZoomIn,
  Tada,
  SlideInLeft,
  SlideInRight,
};
