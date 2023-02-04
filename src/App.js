import './App.css';
import UsestateHook from './UsestateHook';
import UseReducerHook from './UseReducerHook';
import UseEffectHook from './UseEffectHook';
import UseRefHook from './UseRefHook';
import ImperativeHandleHook from './ImperativeHandleHook';
import UseContextHook from './UseContextHook';
import UseMemoHook from './UseMemoHook';
import UseCallbackHook from './UseCallbackHook'

function App() {
  return (
    <div className="App">
      <UsestateHook />
      <UseReducerHook />
      <UseEffectHook />
      <UseRefHook />
      <ImperativeHandleHook />
      <UseContextHook />
      <UseMemoHook />
      <UseCallbackHook />

    </div>
  );
}

export default App;
