import React from 'react';
import ComponentA from './components/ComponentA';
import { UserContext } from './components/Context/UserContext';

class App extends React.Component{
     constructor(props){
        super(props);

           this.state={

            user:'this is App component data',
           }

     }

     render(){

        return(
            <React.Fragment>
                <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
<a href="/"className='navbar-brand'>React with props Drilling</a>
</nav> 

<section className="p-3">
<div className="container">
<div className="row">
   <div className="col">
      <div className="card">
         <div className="card-body rgba-green-light">
            <p className="h4">App component</p>
                  <small className='text-danger'>{JSON.stringify(this.state.user)}</small>
           
           <UserContext.Provider value={this.state.user}>
           <ComponentA/>
           </UserContext.Provider>

         </div>
      </div>
   </div>
</div>
</div>
</section>
            </React.Fragment>
        );

     }
}

export default App;