import Menu from '../components/layout/Menu';
import './App.css';
import Content from '../components/layout/Content';
import { BrowserRouter as Router} from 'react-router-dom';

const app = (props) => (
    <div className='App'>
       <Router>
       <Menu/>
        <Content/>
       </Router>
    </div>
);
export default app;
