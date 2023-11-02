import React from "react"

type Props = {
  name: string
  flag: string
}

function Country({ name, flag }: Props) {
  return (
    <div className="w-48">
      {name}
      <img src={flag} alt="" className="w-48" />
    </div>
  )
}

export default Country
