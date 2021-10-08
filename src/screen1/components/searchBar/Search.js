import React, {useState,useEffect} from 'react'
import Select from "react-select";
import data from './list.js';
import Table from '../table/Table';
// import {useSelector, useDispatch} from "react-redux"
import "./search.css"
// import {changeQuantityAndSave} from "../../../actions/actions";
// import { changeQuantity } from '../../../actions/actions.js';

const Search = (props) => {
    //result stores the selected value
    const [result, setResult] = useState([data.label])
    const [resultArr, setresultArr] = useState([])

    // const dispatch = useDispatch()
    // const resultArr = useSelector(state => state.resultArr)

    const resultHandler = (e) => {
        let val = e.value
        setResult([e.value, e.label, e.price, e.owner, e.quantity])
        
        //Removes duplications and add the selected value to the array
        for(let i=0; i<resultArr.length; i++){
          if(val === resultArr[i].value){
            var count=1;
            alert(e.label + " is already present")
          }
        }

        //If var is not 1 then the result array will be updated with the selected value
        if(!count){
          setresultArr([...resultArr, {label: e.label, owner: e.owner, value: e.value, price: e.price, quantity:e.quantity}])
        }
    }

    useEffect(() => {
     localStorage.setItem("resultArr", JSON.stringify(resultArr));
    }, [resultArr]);
 
    return (
      <div className="screen1">
        <Select
          className="selectComp"
          options={data}
          onChange={resultHandler}
        />
        {result !== null ? <Table className="tableComp" arr={resultArr} /> : []}
      </div>
    );
}

export default Search