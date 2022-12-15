import React from "react";
import styled from "styled-components";

const CancelBtn = styled.button`
  border-radius: 5px;
  background-color: #868e96;
`;

const CancelButton = (props) => <CancelBtn {...props} />;

export default CancelBtn;
