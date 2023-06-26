import React from 'react';
import { ProductListProps } from '../types/types';


const orderProducts = () => {

  function order(a: ProductListProps, b: ProductListProps) {
    
    // if (a.collected === true && b.collected === false) {
    //   return -1;
    // };

    // if (a.collected === false && b.collected === true) {
    //   return 1;
    // };

    // return 0;
  };

  return { order };
};

export default orderProducts;