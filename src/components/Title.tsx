import React from "react"

interface IProps {
  type: string
  title: string
}

function Title(props: IProps) {
  const {type, title} = props

  return (
    <>
      {type === 'large' && <h1 className={'text-3xl text-blue-200'}>{title}</h1>}
      {type === 'small' && <h2 className={'text-lg text-blue-600'}>{title}</h2>}
    </>
  )
}

export default Title
