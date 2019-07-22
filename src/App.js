import React from 'react';
import Postform from './Postform.js';
import Allpost from './Allpost.js'
class App extends React.Component 
{
  render() {
    return (
      <div >
        <Postform />
        <Allpost />
      </div>
    );
  }
} 
export default App;
