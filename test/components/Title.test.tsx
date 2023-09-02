import React from "react"
import {render} from "@testing-library/react"

import Title from "@/components/Title"

describe('Title', () => {
  it('render large title successfully', () => {
    const {baseElement} = render(<Title type={'large'} title={'Large Title'}/>)
    expect(baseElement).toMatchSnapshot()
  })

  it('render small title successfully', () => {
    const {baseElement} = render(<Title type={'small'} title={'Small Title'}/>)
    expect(baseElement).toMatchSnapshot()
  })
})
