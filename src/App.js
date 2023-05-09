
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} 
from 'react-router-dom';
import Home from './components/Home'
import RestaurentCreate from './components/RestaurentCreate'
import RestaurentDetail from './components/RestaurentDetail'
import RestaurentList from './components/RestaurentList'
import RestaurentUpdate from './components/RestaurentUpdate'
import RestaurentSearch from './components/RestaurentSearch'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faHistory,faHome,faList,faNewspaper,faPlus,faSearch,faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Restaurent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home"><Link to= '/'> <FontAwesomeIcon icon={faHome} /> Home </Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/create'> <FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/detail'><FontAwesomeIcon icon={faHistory} /> Detail</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/list'> <FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/update'> <FontAwesomeIcon icon={faUpload} />Update</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/search'> <FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Route path='/create'> 
          <RestaurentCreate />
        </Route>
        <Route path='/detail'> 
          <RestaurentDetail />
        </Route>
        <Route path='/list'> 
          <RestaurentList />
        </Route>
        <Route path='/update/:id'
        render={props=>(
          <RestaurentUpdate {...props} />
        )}
        > 
        </Route>
        <Route path='/search'> 
          <RestaurentSearch />
        </Route>
        <Route exact path='/'> 
          <Home />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
