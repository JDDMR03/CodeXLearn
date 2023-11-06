import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '@/styles/Article.module.css'

export default function CodeViewerTemplate() {
    const template = `
    #include<iostream>

    using namespace std;

    int main() {
      cout << "¡Hola, mundo!";
      return 0;
    }
    `;

    return (
      <div className={styles.codeviewer}> 
        <SyntaxHighlighter language="cpp" style={solarizedlight} showLineNumbers={true}>
          {template}
        </SyntaxHighlighter>
        <CopyToClipboard text={template}>
          <button><i class="nf nf-md-content_copy"></i></button>
        </CopyToClipboard>
      </div>
    );
}
