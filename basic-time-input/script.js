"use strict";

const checkNumber = (input) => {
  console.log(input.value.length > 2);
  if (parseInt(input.value) < parseInt(input.min)) {
    input.value = input.min;
  } else if (
    input.value.length > 2 ||
    parseInt(input.value) > parseInt(input.max)
  ) {
    input.value = input.min;
  }
};
