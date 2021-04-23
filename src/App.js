import logo from './logo.svg';
import github from './GitHub-Mark-64px.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "react-progressbar-on-scroll";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Switch, Route, Link} from 'react-router-dom';
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis dolorem pariatur? Asperiores doloremque, minima neque labore iste beatae dicta ipsam corrupti eaque optio soluta vero ipsa, excepturi consequuntur alias?";
export default function App() {
   return (
       <div className="App">
       {/* Navigation Bar */}
       <Navbar bg ='light' variant = 'light' sticky = "top">
         <Navbar.Brand href = "/" className="textlogo"><strong>MENU</strong></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id = "basic-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link href = "/">Home</Nav.Link>
             <Nav.Link href = "/about">About</Nav.Link>
             <NavDropdown title="Projects" id="basic-nav-dropdown">
               <NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="/projects/site">Static Site</NavDropdown.Item>
               <NavDropdown.Item href="/projects/slackbot">Slack Bot</NavDropdown.Item>
               <NavDropdown.Item href="/projects/stats">AP Stats Formulas</NavDropdown.Item>
             </NavDropdown>
           </Nav>
           <Nav className = "ml-auto">
             
             <Link to ="/react">
             <img src = {logo} width = "40px" height = "40px" alt = "React Logo" ></img>
             </Link>
             <Link to = "/github">
             <img src= {github} width = "32px" height = "32px"alt = "Github Logo"></img>
             </Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
       {/* ProgressBar on the Bottom, color: black */}
       <ProgressBar
       position="bottom"
       color = "black"
       />
       {/* ReactRouter internal switches for all paths */}
       <Switch>
         <Route path = "/about"> <AboutPage /> </Route>
         <Route path = "/projects/site"> <SitePage/> </Route>
         <Route path = "/projects/slackbot"> <SlackBotPage/></Route>
         <Route path = "/projects/stats"> <StatsPage/></Route>
         <Route path = "/projects">
           <ProjectsPage />
         </Route>
         <Route path = "/react" component={()=>{window.location.href="https://reactjs.org"; return null}}/>
         <Route path = "/github" component={()=>{window.location.href="https://github.com/zazu7765"; return null}}/>
         <Route path= "/">
           <HomePage />
         </Route>
       </Switch>
     </div>
   );
 }
/* Homepage*/
function HomePage(){
  return <Jumbotron>
  <h1>Welcome to my project site!</h1>
  <p>
    This is where I catalogue all my current and past projects, as well as write my own content!
  </p>
  <p>
  <Link to="/about" className="whitelink"><Button variant = "primary">About me</Button></Link>
  <div className="divider"/>
  <Link to="/projects" className="whitelink"><Button variant = "primary">My Projects</Button></Link>
  </p>
</Jumbotron>
}
/*About me*/
function AboutPage(){
  return <p>About TBA</p>
}
/*Projects Page */
function ProjectsPage(){
  return Array(50)
    .fill(lorem)
    .map((item, index) => (
      <p key={index}>{item}</p>
    ))
}
/*Static Site Page */
function SitePage(){
  return <h1>My Static Site Project!</h1>
}
/*Slack Bot Page */
function SlackBotPage(){
  return <h1>My Slack Bot Page</h1>
}
/*AP Stats Page */
function StatsPage(){
  return <h1>My AP Statistics Final Assignment</h1>
}