import React, { useState } from 'react'
import styled from 'styled-components'

const CoolCardContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${props => props.bg || '#48e'};
  color: ${props => props.color || 'white'};
  height: 8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: box-shadow 1s ease, transform 1s ease;
  transform-style: preserve-3d;
  //  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 2, 8, 0.2);
    transition: box-shadow 250ms ease;
    z-index: 5;
  }
`

const CoolCardContent = styled.div`
  position: relative;
  transform: translateZ(20px);
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Shine = styled.div`
  position: absolute;
  opacity: 0.25;
  background: radial-gradient(white, transparent 50%);
  border-radius: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transform: translateZ(1px);

  ${props =>
    props.offset
      ? `transform: translateX(${props.offset.x * 100}px) translateY(${
          props.offset.y * 60
        }px) translateZ(1px) scale3d(2, 2, 2)`
      : null};
`

const CoolCard = ({ label, logo, bg, color, children, ...rest }) => {
  const [mousePos, setMousePos] = useState(null)
  const enableShine = false
  const xRange = 12
  const yRange = 20

  return (
    <div {...rest}>
      <CoolCardContainer
        onMouseOver={() => setMousePos({ x: 0, y: 0 })}
        onMouseOut={() => setMousePos(null)}
        onMouseMove={event => {
          let currentTargetRect = event.currentTarget.getBoundingClientRect()
          const event_offsetX = Math.max(
              -1,
              Math.min(
                1,
                ((event.clientX - currentTargetRect.left) /
                  currentTargetRect.width) *
                  2 -
                  1.0
              )
            ),
            event_offsetY = Math.max(
              -1,
              Math.min(
                1,
                ((event.clientY - currentTargetRect.top) /
                  currentTargetRect.height) *
                  2.0 -
                  1.0
              )
            )

          setMousePos({
            x: event_offsetX,
            y: event_offsetY,
            width: currentTargetRect.width,
            height: currentTargetRect.height,
          })
        }}
        bg={bg}
        color={color}
        isMouseOver={!!mousePos}
        style={{
          transform: !!mousePos
            ? `rotateY(${-mousePos.x * yRange}deg) rotateX(${
                mousePos.y * xRange
              }deg) perspective(100px) translateZ(10px)`
            : null,
        }}
      >
        <CoolCardContent>
          {logo && <img src={logo} style={{ height: 64 }} />}
          {label}
          {children}
        </CoolCardContent>
        {enableShine && !!mousePos && <Shine offset={mousePos} />}
      </CoolCardContainer>
    </div>
  )
}

export default CoolCard
