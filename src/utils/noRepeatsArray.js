export const noRepeatsArray = (arr1, arr2) => {
  if (arr1.length !== 0) {
    const nameArray1 = arr1.map((el) => el.name);
    const nameArray2 = arr2.map((el) => el.name);

    if (nameArray1.find((name) => name === nameArray2[0])) {
      return arr1;
    } else {
      return [...arr1, ...arr2];
    }
  } else {
    return arr2;
  }
};
