import React from 'react'
import styled from 'styled-components'

const Pill = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 32px;
  background-color: #262629;
  color: white;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`

const Light = styled.div`
  background-color: ${props => (props.on ? 'lightgreen' : 'red')};
  box-shadow: 0 0 8px
    ${props => (props.on ? `rgba(0, 255, 0, 0.5)` : `rgba(255, 0, 0, 0.5)`)};
  height: 8px;
  width: 8px;
  border-radius: 100%;
  margin-right: 8px;
`

export default ({ available, label, ...rest }) => (
  <Pill {...rest}>
    <Light on={available} />
    {label || 'Available'}
  </Pill>
)
