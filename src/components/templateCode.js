import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeViewer() {
    const code = `
    #include<iostream>

    using namespace std;

    int main() {
      cout << "¡Hola, mundo!";
      return 0;
    }
    `;

    return (
      <SyntaxHighlighter language="cpp" style={solarizedlight} showLineNumbers={true}>
        {code}
      </SyntaxHighlighter>
    );
}
