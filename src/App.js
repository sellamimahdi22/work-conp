import './App.css';
import { FullName } from './conp/Profile/FullName';
import { ProfilePhoto } from './conp/Profile/ProfilePhoto';
import { Adress } from './conp/Adress';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
<Adress/>
    </div>
  );
}

export default App;
