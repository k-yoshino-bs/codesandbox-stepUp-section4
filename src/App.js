import { StyledJsx } from "./components/StyledJsx";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import "./styles.css";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
