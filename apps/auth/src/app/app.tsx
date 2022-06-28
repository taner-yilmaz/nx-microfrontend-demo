// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useState } from 'react';
import NxWelcome from './nx-welcome';
import {AppEventService, store} from '@sol-demo/common-lib'; // shared data


export function App() {
  const [name, setName] = useState("");

  const publishUser = () => {
    AppEventService.emit('PUBLISH_USER', name);
    store.dispatch({ type: 'SET_USER', user: name });
  };

  return (
    <>
      <NxWelcome title="auth" />
      <div>
          <label>First name:</label><br />
          <input style={{borderColor: 'gray', borderWidth: '1px', width: '200px', height: '30px', lineHeight: '30px'}} type="text" id="fname" name="fname" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <input type="button" value="Submit" onClick={publishUser} />
      </div>

    </>
  );
}

export default App;
