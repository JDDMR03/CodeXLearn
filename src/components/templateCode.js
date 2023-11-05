import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const code = `
    #include<iostream>
    
    using namespace std;

    int main() {
        cout << "¡Hola, mundo!";
        return 0;
    }
    `;

export default function CodeViewer() {
    const code = `
    #include<iostream>

    int main() {
        std::cout << "¡Hola, mundo!";
        return 0;
    }
    `;

    return (
      <SyntaxHighlighter language="cpp" style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    );
}
