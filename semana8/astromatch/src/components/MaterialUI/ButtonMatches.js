import React from "react";
import styled from "styled-components";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const DivContent = styled.div`
  display: flex;
  background-color: #c94d81;
  height: stretch;
  margin-left: 320px;
`;

const ButtonPer = styled(Button)`
  display: flex;
  width: 100px;
`;

export default function ButtonMatches() {
  return (
    <DivContent>
      <ButtonPer>
        <FavoriteIcon />
      </ButtonPer>
    </DivContent>
  );
}
