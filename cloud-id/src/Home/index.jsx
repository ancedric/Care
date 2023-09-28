import {useEffect} from 'react';
import ReactGA from 'react-ga'; 
import Banner from '../Banner';
import Articles from '../Articles';


function App() {
  useEffect(() => {
    ReactGA.initialize('G-R7WP27GJSM');
    ReactGA.pageview("/");
  }, []);
  return (
    <><Banner />
      <Articles/>
    </>
  );
}

export default App;
