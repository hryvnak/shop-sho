import { wrapper } from "./styles";

export default function Wrapper({ children }) {
  return (
    <div>
      <style jsx>{ wrapper }</style>
      { children }
    </div>
  )
}
