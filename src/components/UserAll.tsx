import React from 'react'

export default function UserAll(props: any) {
  return (
    <React.Fragment>
        {props.data.map((data: any, index: any) => {
            return (
                <React.Fragment key={index}>
                    <h2>{data.name}</h2>
                </React.Fragment>
            )
        })}
    </React.Fragment>
  )
}
