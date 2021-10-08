import React, {useState} from 'react'
import './screen2.css'
import Footer from '../footer/Footer'

const Screen2 = () => {

    const [arr, setArr] = useState(JSON.parse(localStorage.getItem('resultArr')));
    console.log(arr)
    

    return (
      <>
        <div className="style-rect2"></div>
        <div className="App">
          <h2>Updated Stock List</h2>
          <table>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Quantity</th>
            </tr>

            {arr.map((item) => {
              return (
                <tr>
                  <td>{item.value}</td>
                  <td>{item.label}</td>
                  <td>{item.price}</td>
                  <td>{item.owner}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <Footer/>
      </>
    );
}

export default Screen2
