'use client';

import { Puck, usePuck } from '@measured/puck';
import { config } from '@/lib/puck/config';
import '@measured/puck/dist/index.css';
import { useEffect, useState } from 'react';
import './styles.css';

export default function Editor() {

  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('puck') as string)
    if(data){
      setItems(data);
    }
  }, []);

  return (
    <Puck
      config={config}
      data={ items ||
        {
          content: [],
          root: {
            props: {
              title: 'My Website'
            }
          }
        }
      }
      overrides={{
        headerActions: ({ children }) => {
          const { appState } = usePuck();
 
          return (
            <>
              <button
                onClick={() => {
                  localStorage.setItem('puck', JSON.stringify(appState.data))
                  // save(appState.data);
                }}
                style={{ color: "white"}}
              >
                Save
              </button>
            </>
          );
        },
        // header: ({ actions, children }) => {
        //   console.log({ children })
          
        //   return(
        //     <div style={{ background: '#383838', padding: '0.2rem', width: '100svw' }}>
        //         <div style={{ background: 'yellow' }}>
        //           {children}
        //         </div>
        //     </div>
        //   )
        // }
      }}
      // onPublish={async (data) => {
      //   console.log('Published:', data);
      //   localStorage.setItem('puck', JSON.stringify(data));
      //   // Here you would typically save the data to your backend
      // }}
    />
  );
}

{/* <div
style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gridGap: 16 }}
>
<div>
  <Puck.Components />
</div>
<div>
  <Puck.Preview />
</div>
</div> */}