import { useEffect } from 'react';

function App() {
  useEffect(function(){
    document.title = "Main"
  }, []);

  return (
    <div className="App">
        <h1>Tis App!</h1>
    </div>
  );
}

export default App;