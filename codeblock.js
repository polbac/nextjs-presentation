import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default ({ code }) => <div style={{
    width: 1100,
    fontSize: 20,
}}>
   <SyntaxHighlighter language="javascript" style={atomDark}>
        {code}
   </SyntaxHighlighter>
</div>