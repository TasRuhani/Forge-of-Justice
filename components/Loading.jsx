import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] bg-background">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-primary border-gray-600"></div>
    </div>
  )
}

export default Loading
