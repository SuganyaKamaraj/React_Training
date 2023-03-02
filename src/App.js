//import logo from './logo.svg';

import Button from '@clayui/button';
import './App.css';
import ButtonComponent from './components/hoc/ButtonComponent';
import ButtonComponentMigration from './components/hoc/ButtonComponentMigration';
import HoverComponent from './components/hoc/HoverComponent';
import Buttons from './components/hooks/Buttons';
import DataLoader from './components/hooks/DataLoader';
import TestHook from './components/hooks/TestHooks';
import CompLifeCycle from './components/lifecycle/CompLifeCycle';
import ChildParentInvoke from './components/propsstate/ChildParentInvoke';
import StatefulApp from './components/propsstate/StatefulApp';
import TextInput from './components/propsstate/TextInput';
import { Footer } from './Footer';
import SpaApp from './spa/services/SpaApp';
//import Header from './Header';


function App() {
  const company = "BOFA"
  return (
    <div className="App">
      <h1 className='bg-primary text-white'>  Welcome to React 1.8x</h1>
      <h2> Business Component - Suganya </h2>
      {/* <Header company={company} city="Chennai"/> */}
      {/* <StatefulApp/>
      <TextInput /> */}
      {/* <ChildParentInvoke /> */}
      {/* <CompLifeCycle /> */}
      {/* <Buttons/> */}
      {/* <DataLoader/> */}
      {/* <TestHook/> */}
      {/* <ButtonComponent/>  */}
      {/* <ButtonComponentMigration/> */}
      {/* <HoverComponent/> */}
      <SpaApp />
      <Footer />
    </div>
  );
}

export default App;
