import React from 'react';
import styled from 'styled-components';

const TutorListCardContainer = styled.div`
  padding-top: 70px;
`

const TutorListContainerHeader = styled.h1`
  color: #000;
  text-align: center;
`

const Tutors = () => {
  return (
    <TutorListCardContainer>
      <TutorListContainerHeader>
      All Tutors
      </TutorListContainerHeader>
      
    </TutorListCardContainer>
  )
}

export default Tutors
