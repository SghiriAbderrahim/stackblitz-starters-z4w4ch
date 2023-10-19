'use client';

import React from 'react';


export default function Option(props) {
  const {value,name} = props;
return(
  <option className="rounded-md appearance-none accent-pink-500  " value={value}>{name}</option>
)
}