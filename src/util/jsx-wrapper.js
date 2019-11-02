import React from 'react';
export const wrapInJSX = (...args) => {
  let finalJSX = [];
  args.forEach((element, index) => {
    finalJSX.push(<div key={index}> {element} </div>);
  });
  return finalJSX;
}
