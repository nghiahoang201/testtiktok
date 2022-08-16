import {  Fragment } from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {publicRoutes} from './routes';
import DefaulLayout from './Conponets/Layout/DefaulLayout';

function App() {
  return (
   <Router>
      <div className="App">
         <Routes>
          {publicRoutes.map((route , index) =>{
            let Layout =  DefaulLayout;
            if ( route.layout )
              {
                Layout = route.layout

              } else if ( route.layout === null) 
              {
                Layout = Fragment
              }
            var Page = route.component
             return <Route key ={index} path ={ route.path} element = { 
             <Layout>
                 <Page/>
             </Layout>
             }/>
          })}
          
         </Routes>
      </div>
   </Router>
  );
}

export default App;
