import React, {useState} from 'react'
import data from '../../../list.json'
import './table.css'

const Table = (props) => {
    
    //var result = JSON.parse(localStorage.getItem("result"));
    // console.log(props.arr[2]);
    // if(props.arr[2]==='data[2].ProductID'){
    //     console.log('data[2].ProductID');
    // }
    const [enteredVal, setEnteredVal] = useState()
    const [enteredItem, setEnteredItem] = useState(1)

    const HandleChange = (e, item) => {
      console.log(item)
        setEnteredVal(e.target.value)
        // setEnteredItem(val)
    }

    const HandleSave = (e) => {
      // arr[4] = enteredVal
      // //console.log("Saved", arr[4])

      for(let i=0;i< props.arr.length;i++){
        if(props.arr[i].value == enteredItem){
          props.arr[i].quantity = enteredVal
          console.log("Entered Val is" + props.arr[i].quantity)

      localStorage.setItem("resultArr", JSON.stringify(props.arr));   }
      }
    }

    
    return (
      <div className="App">
          <table>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Quantity</th>
              <th>Save</th>
            </tr>
          
              {
                props.arr.map((item)=>{
                return(
                <tr>
                  <td>{item.value.toString()}</td>
                  <td>{item.label}</td>
                  <td>{item.price}</td>
                  <td>{item.owner}</td>
                  {/* <td><input placeholder={item.quantity} onChange={HandleChange)}/></td> */}
                  <td><input className="inHolder" placeholder={item.quantity} onChange={ e => {
                    if(e.target.value == null){
                      setEnteredVal(item.quantity)
                    }
                    setEnteredVal(e.target.value)
                    setEnteredItem(item.value)
                  }}/></td>
                  <td><button className="btn" onClick={HandleSave}>Save</button></td> 
                </tr>)
              })}
          </table>
        </div>
    )
}

export default Table;
//eexport default Table;


