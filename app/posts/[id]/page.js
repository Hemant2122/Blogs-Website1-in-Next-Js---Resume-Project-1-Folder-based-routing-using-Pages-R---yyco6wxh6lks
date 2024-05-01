"use client"

import React from 'react';

export default function PostDetail({params}) {
  // Complete the function
const {id} = params;
  
  return(
    <h1>Post Detail: {id}</h1>
  )
}