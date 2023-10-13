import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeSnipptet({ code }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      className="rounded-2xl"
    >
      {code}
    </SyntaxHighlighter>
  );
}
