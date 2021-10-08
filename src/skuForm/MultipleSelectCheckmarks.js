import React, { useEffect, useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@material-ui/core";

import data from "./list";
import warehouses from "./warehouseList";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function MultipleSelectCheckmarks() {
  const [skuArr, setSkuArr] = useState([]);
  const [finalSkuArr, setFinalSkuArr] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkuArr(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    let skuArrlen = skuArr.length
    var i
    for (i = 0; i < data.length; i++) {
      if (data[i].label === skuArr[skuArrlen - 1]) {
        var value = data[i].value
        var label = data[i].label
        var owner = data[i].owner
        var price = data[i].price
        var quantity = data[i].quantity
      }
    }


      setFinalSkuArr(...finalSkuArr, {value: value, label: label, owner: owner, price: price, quantity: quantity})
  }, [skuArr])


  const [warehouse, setWarehouse] = useState("");

  const handleChangeW = (event) => {
    setWarehouse(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Warehouse
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={warehouse}
            label="warehouse"
            onChange={handleChangeW}
          >
            {warehouses.map((warehouse) => (
              <MenuItem value={warehouse.id} label={warehouse.name}>
                <ListItemText primary={warehouse.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <br></br>
      <div>
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-checkbox-label">SKU</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={skuArr}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {data.map((name) => (
              <MenuItem key={name.value} value={name.label}>
                <Checkbox checked={skuArr.indexOf(name.label) > -1} />
                <ListItemText primary={name.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default MultipleSelectCheckmarks;
