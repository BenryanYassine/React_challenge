import React, { Component } from 'react'
import Post_image from './Post_image';
 
import Datalist from './data.json' ;
 
import querystring from 'query-string'
export default class MySlider extends Component {
  
  
  constructor(props) {
    super();
  this.state={
    products: Datalist,
    col: 4,
    row:2,
    data_index: 1

    //sproductss: data.properties[1]
  }; 
}

setRows(cols,rows){
   console.log(Datalist);
  let varr = []; 
 for (let i=0 ; i<cols*rows ; i++) {
      
  varr[i] =   Datalist[i]
}
this.setState({
  products : varr

})


}


  componentDidMount (){
   
    setTimeout(() => {
      console.log('Our data is fetched');
     
  
const vall =querystring.parse(this.props.location.search) ;
//console.log(vall.col); 
this.setRows(vall.col,vall.rows) ;
 this.setState({
        col: vall.col,
        row: vall.rows
      })
      document.documentElement.style.setProperty('--colss', this.state.col);
console.log(this.state.col); 
  }, 500)
 


}


  prevProperty(idd1,idd2)  {
 let i=0; 
 i=0;
    let varr = [];
    //varr = this.state.products ;
    varr = [];
    console.log('data index')
    console.log(varr)
    console.log(this.state.data_index)
 for ( i=parseInt(this.state.data_index) ;  i<parseInt(this.state.data_index)+parseInt(this.state.col*this.state.row); i++) {
   
  console.log(i)
  
  varr.push( Datalist[i]) ;
  console.log(varr.values)
}

console.log(varr)
 console.log(this.state.data_index)
 
for ( let ii= 0;  ii<this.state.row; ii++) {
  console.log(ii);
  varr[parseInt(this.state.col)*ii+parseInt(this.state.col)-1]=Datalist[parseInt(this.state.data_index)+parseInt(this.state.col)*parseInt(this.state.row)+ii]
 
  
}

console.log(varr)
this.setState({
  data_index :  parseInt(this.state.data_index) + parseInt(this.state.row)
  //products : varr

})
console.log(this.state.data_index)
  }
  render() {  
    return (
      <React.Fragment>
      <button onClick={() => this.prevProperty(0,2)}  >Prev</button>
         <div className="wrapper">
        { this.state.products.map((value)=>{

       return  <Post_image image ={value.thumbnailUrl} />

       })} 
     </div>
 </React.Fragment>
    )
  }
}
