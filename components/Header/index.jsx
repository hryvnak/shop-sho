import Container from "../Container";
import { header } from "./styles";
import Wrapper from "./Wrapper";

export default function Header({ children }) {
  return (
    <header>
      <style jsx>{ header }</style>
      <Container>
        <Wrapper>
          { children }
        </Wrapper>
      </Container>
    </header>  
  )
}
