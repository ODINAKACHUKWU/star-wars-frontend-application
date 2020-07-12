import React, { Component } from "react";
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

const slideInDownAnimation = keyframes`${slideInDown}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;
const bounceInUpAnimation = keyframes`${bounceInUp}`;
const shakeAnimation = keyframes`${shake}`;
const tadaAnimation = keyframes`${tada}`;
const rubberBandAnimation = keyframes`${rubberBand}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const zoomInAnimation = keyframes`${zoomIn}`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const SlideInDownElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${slideInDownAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const SlideInUpElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${slideInUpAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const SlideInLeftElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${slideInLeftAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const SlideInRightElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${slideInRightAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const BounceInLeftElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${bounceInLeftAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const BounceInUpElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${bounceInUpAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const BounceInRightElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${bounceInRightAnimation}
    ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const ShakeElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${shakeAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const TadaElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${tadaAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const RubberBandElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${rubberBandAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const FadeInElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${fadeInAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

// infinte defaults to false, duration defaults to 2s and delay defaults to 0s
const ZoomInElement = styled.div`
  animation: ${(props) => (props.duration ? `${props.duration}` : 2)}s
    ${zoomInAnimation} ${(props) => (props.delay ? `${props.delay}` : 0)}s
    ${(props) => (props.infinite ? `infinite` : null)};
`;

class SlideInDown extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <SlideInDownElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </SlideInDownElement>
    );
  }
}

class SlideInUp extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <SlideInUpElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </SlideInUpElement>
    );
  }
}

class SlideInLeft extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <SlideInLeftElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </SlideInLeftElement>
    );
  }
}

class SlideInRight extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <SlideInRightElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </SlideInRightElement>
    );
  }
}

class BounceInLeft extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <BounceInLeftElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </BounceInLeftElement>
    );
  }
}

class BounceInRight extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <BounceInRightElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </BounceInRightElement>
    );
  }
}

class BounceInUp extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <BounceInUpElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </BounceInUpElement>
    );
  }
}

class Shake extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <ShakeElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </ShakeElement>
    );
  }
}

class Tada extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <TadaElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </TadaElement>
    );
  }
}

class RubberBand extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <RubberBandElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </RubberBandElement>
    );
  }
}

class FadeIn extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <FadeInElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </FadeInElement>
    );
  }
}

class ZoomIn extends Component {
  render() {
    const { children, className, duration, delay, infinite } = this.props;
    return (
      <ZoomInElement
        className={className}
        duration={duration}
        delay={delay}
        infinite={infinite}
      >
        {children}
      </ZoomInElement>
    );
  }
}

export {
  SlideInDown,
  SlideInUp,
  SlideInRight,
  SlideInLeft,
  BounceInLeft,
  BounceInRight,
  BounceInUp,
  Shake,
  Tada,
  RubberBand,
  FadeIn,
  ZoomIn,
};
