// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import { useState, useEffect } from 'react';
import NxWelcome from './nx-welcome';
import {data, store} from '@sol-demo/common-lib'; // shared data

export function App() {
  const [name, setName] = useState("");
  const _store: any = store.getState();

  // test
  useEffect(() => {
    setName(_store.user);
    const unsubscribe = store.subscribe(() => {
      setName(_store.user);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <>
      <NxWelcome title={`sub-app-1 | current user: ` + name} />
      <div>{name}</div>
    </>
  );
}

export default App;
