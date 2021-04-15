import { memo } from "react";
import { Container } from "./styles";

function CardComponent({ children, onClick, className }) {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
}

export const Card = memo(CardComponent);
