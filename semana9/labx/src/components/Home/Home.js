import React from "react";
import styled from "styled-components";

import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <DivContent>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
    </DivContent>
  );
}
