// Notification.js

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from "react-icons/fa";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NotificationWrapper = styled.div`
z-index: 2000;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 16px;
  right: 16px;
  padding: 16px;
  padding-right: 30px;
  font-size: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-in-out;
  background-color: ${(props) => (props.type === 'success' ? '#4caf50' : '#f44336')};
  color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding-top: 12px;
`;

const Notification = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Notify parent component to remove this notification
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      {visible && (
        <NotificationWrapper type={type}>
          <CloseButton onClick={() => setVisible(false)}><FaTimes /></CloseButton>
          {message}
        </NotificationWrapper>
      )}
    </>
  );
};

export default Notification;
