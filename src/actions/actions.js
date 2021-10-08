export const setGlobalState = () => {
  return{
    type: "SET_GLOBAL_STATE"
    
  }
}


export const changeQuantityAndSave = () => {
    return {
      type: "CHANGE_QUANTITY_AND_SAVE",
      payload: Object,
    };
}

export const saveData = () => {
  return {
    type: "SAVE_DATA",
  };
};

export const fetchData = () => {
  return {
    type: "FETCH_DATA",
  };
};

export const displayTable = () => {
  return {
    type: "DISPLAY_TABLE",
  };
};

export const checkDataAddedToTable = () => {
  return {
    type: "CHECK_DATA_ADDED_TO_TABLE",
  };
};
