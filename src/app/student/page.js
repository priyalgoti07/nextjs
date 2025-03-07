import React from 'react'

const page = () => {
  return (
    <div>Student Page</div>
  )
}

export default page

export function generateMetadata() {
  return {
    title: "meta Student page",
    description:"meta Student description"
  }
}