import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the container to full height of the viewport */
`

const NotFound = () => {
  return (
    <Container>
      <h1>404 - Sorry, the page is not found.</h1>
    </Container>
  )
}

export default NotFound;
