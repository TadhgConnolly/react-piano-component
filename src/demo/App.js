import React from 'react';
import InteractivePiano from './components/InteractivePiano';
import MadeWithLoveTag from './components/MadeWithLoveTag';
import './App.css';
import Effect from './Effect';

function App() {
  function reload() {
    window.location.reload();
  }

  window.addEventListener('resize', reload);

  return (
    <div class={'wrapper'}>
      <div className={'app__effect'}>
        <Effect />
      </div>
      <div className={'app__body'}>
        <InteractivePiano />
      </div>
      <div className={'app__made-with-love-tag'}>
        <MadeWithLoveTag
          className={'app__made-with-love-tag'}
          author={'lillydinhle'}
          link={'https://github.com/lillydinhle'}
        />
      </div>
    </div>
  );
}

export default App;
