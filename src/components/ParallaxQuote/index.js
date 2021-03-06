import React from 'react';
import { QuoteContainer } from './QuoteElements';
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/home_bg.png'

const ParallaxQuote = () => {
  return (
    <>
      <Parallax bgImage={bgImage} strength={500} alt='Curis Team'>
        <div className = "new_text">
          <p>  </p>
        </div>
      </Parallax>

      <QuoteContainer className = "parallax_content">
        <p>“Our mission is to advocate <b>to improve</b> public health in the local community through education, outreach, and practical solutions.”</p>
      </QuoteContainer>
    </>
  );
};

export default ParallaxQuote;
