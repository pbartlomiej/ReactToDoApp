import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={title} imageURL={image} />
    <p>{paragraph}</p>
  </Container>
);

const { title, image, paragraph } = settings.info;

export default Info;