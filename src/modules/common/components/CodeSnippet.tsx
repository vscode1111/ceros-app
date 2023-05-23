import { COLORS } from 'modules/common';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  text: string;
}

export function CodeSnippet({ text }: CodeSnippetProps): JSX.Element {
  return (
    <div>
      <SyntaxHighlighter
        styles={{ padding: 20 }}
        language="solidity"
        style={atomDark}
        customStyle={{
          marginTop: 2,
          padding: 20,
          maxHeight: 600,
          backgroundColor: COLORS.gray400,
          borderRadius: 16,
        }}
        wrapLongLines
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
}
