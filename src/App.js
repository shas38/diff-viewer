import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

const src = `      IP Address  Port   Model  Use Alarms
==========================================
     10.83.154.7   162  unique       false
       127.0.0.1   162  unique        true
  10.126.172.168  8001  shared        true
  10.126.172.162  8001  shared        true

4 entries found.
`;
const dest = `      IP Address  Port   Model  Use Alarms
==========================================
       127.0.0.1   162  unique        true
  10.126.172.162  8001  shared        true
  10.126.172.168  8001  shared        true
     10.98.54.90   162  unique        true

4 entries found.
`;

function App() {
  const [comp, setComp] = useState({
    src: src.split('\n'),
    dest: dest.split('\n')
  });

  const diff = (src, dest, line, comment) => {
    let srcComp = ``;
    let destComp = ``;
    let flag = false;
    for (let i = 0; i < src.length; i++) {
      if (src[i] === dest[i]) {
        srcComp += src[i];
        destComp += dest[i];
      } else {
        flag = true;
        srcComp += `<span style="background-color:#7d383f">${src[i]}</span>`;
        destComp += `<span style="background-color:	#055d67	">${dest[i]}</span>`;
      }
    }

    return [
      <td key={line}>{line}</td>,
      <td
        style={{ background: flag ? '#632f34' : '', color: 'white' }}
        key={srcComp}
        dangerouslySetInnerHTML={{ __html: srcComp }}
      />,
      <td
        style={{ background: flag ? '#044b53' : '', color: 'white' }}
        key={destComp}
        dangerouslySetInnerHTML={{ __html: destComp }}
      />,
      <td key={Math.random()}>{comment}</td>
    ];
  };

  return (
    <div className='App'>
      <Table variant='dark' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Src</th>
            <th>Dest</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {comp.src.map((src, i) => {
            return <tr key={i}>{diff(src, comp.dest[i], i, '@mdo')}</tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
