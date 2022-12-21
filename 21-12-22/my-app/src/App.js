import logo from './logo.svg';
import './App.css';
import {Button} from './components/button/Button';
import { Text } from './components/text/Text';

function App() {

  const customColorOne = 'blue';
  const customColorTwo = 'red';
  const customColorThree = 'green';

  return (
    <div className="App">
      <Text 
        as = 'h1'
        style = {{ color: customColorOne }} 
        variant = 'title'
        >
        The way to get started...
      </Text>
      <Text 
        as = 'h2' 
        style = {{ color: customColorTwo }}
        variant = 'subtitle'
        >
        is to quit talking and begin doing.
      </Text>
      <Text 
        as = 'h3' 
        style = {{ color: customColorThree }}
        variant = 'signature'
        >
        - Walt Disney
      </Text>
      <Button 
        aria-label = 'Primo bottone' 
        variant = 'primary'
        onClick = {() => console.log('You clicked on the first button :)')}
        >
        Ready,
      </Button>
      <Button 
        aria-label = 'Secondo bottone'
        variant = 'secondary' 
        onClick = {() => console.log('You clicked on the second button :)')}
        >
        set...
      </Button>
      <Button
        aria-label = 'Terzo bottone'
        variant = 'tertiary'
        onClick = {() => console.log('You clicked on the third button :)')}
        >
        Go!
      </Button>
    </div>
  );
}

export default App;
