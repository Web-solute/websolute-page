import { useState, useEffect, useRef } from 'react';
import {
  AnimationContainer,
  LogoText,
  CarouselContainer,
  CarouselRotator,
  CarouselRotatorItem,
} from './HomeAnimation.styled';

export default function HomeAnimation() {
  const [count, setCount] = useState(0);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <>
      <AnimationContainer>
        <LogoText>Websolute</LogoText>
        <CarouselContainer>
          <span>IT Community</span>&nbsp;
          <span>for</span>&nbsp;&nbsp;
          <CarouselRotator>
            {count % 3 === 0 && <CarouselRotatorItem>Hustler</CarouselRotatorItem>}
            {count % 3 === 1 && <CarouselRotatorItem>Hacker</CarouselRotatorItem>}
            {count % 3 === 2 && <CarouselRotatorItem>Hipster</CarouselRotatorItem>}
          </CarouselRotator>
        </CarouselContainer>
      </AnimationContainer>
    </>
  );
}
