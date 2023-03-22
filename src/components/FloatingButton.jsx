import React from 'react'
import { css } from "@emotion/react"
import styled from '@emotion/styled'
import vioImage from '../assets/vio.png'


const Button = styled.button(({ position = { top: 80, right: 5} }) => css`
  position:fixed;
  width:60px;
  height:60px;
  background-color: #eee;
  border: 1px solid #e3e3e3;
  background-image: url(${vioImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  box-shadow: 2px 2px 3px #e7e7e7;
  z-index:100;
  top: ${position.top}%;
  right: ${position.right}%;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #e5e5e5;
  }
`)

const ButtonWrapper = styled.div(css`
  width: 100vw;
  height: 100vh;
  position: relative;
`)

const FloatingButton = () => {
  return (
    <ButtonWrapper>
      <Button />
    </ButtonWrapper>
  )
}


export default FloatingButton