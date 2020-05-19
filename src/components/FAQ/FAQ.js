import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={title} imageURL={image} />
    <p>{paragraph}</p>
  </Container>
);

const { title, image, paragraph } = settings.faq;

export default FAQ;