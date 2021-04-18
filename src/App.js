// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'
import Header from './Components/Header'
import CarHomePageScreen from './Screens/CarHomePageScreen'
import HomePageScreen from './Screens/HomePageScreen'
import RegisterScreen from './Screens/RegisterScreen'
import LoginScreen from './Screens/LoginScreen'

function App() {
  return (
    <Router>
      <Route render={({ history }) => <Header history={history} />} />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePageScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/create' component={CarHomePageScreen} exact />
          <Route path='/search/:keyword' component={HomePageScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
