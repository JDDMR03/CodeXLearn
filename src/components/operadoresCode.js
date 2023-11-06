import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '@/styles/Article.module.css'

export default function CodeViewerOperadores() {
    const code = `#include<iostream>

using namespace std;

int x,y,ans;

int main() {

  cin >> x >> y;

  ans = x + y;

  if(ans>=0 && ans!=1){
    cout << "Si";
  }
  else{
    cout<<"No";
  }

  return 0;
}
    `; 

    return (
      <div className={styles.codeviewer}> 
        <SyntaxHighlighter language="cpp" style={solarizedlight} showLineNumbers={true}>
          {code}
        </SyntaxHighlighter>
        <CopyToClipboard text={code}>
          <button><i class="nf nf-md-content_copy"></i></button>
        </CopyToClipboard>
      </div>
    );
}
