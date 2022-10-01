import { container } from "./styles";

export default function Container({ children }) {
  return (
    <div>
      <style jsx>{ container }</style>
      { children }
    </div>
  )
}
