/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { type FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useAppDispatch
  // useAppSelector
} from 'feature/redux/hooks'
import {
  tryLogin,
  loginSuccess,
  loginFailed
} from 'feature/redux/user/userSlice'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { type user } from './types'
import { InputField } from 'components/inputField'
import { BasicButton } from 'components/basicButton'

const submitLabel = 'Submit'

const Login: FC = () => {
  const navigate = useNavigate()

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  const LoginText = styled('div')(({ theme }) => ({
    ...theme.typography.body1,
    fontFamily: 'Rubik Iso',
    fontSize: 50,
    color: theme.palette.primary.main,
    padding: theme.spacing(2)
  }))

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()

  const handleUsername = (data: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(data.target.value)
  }

  const handlePassword = (data: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(data.target.value)
  }

  const userPaylod: user = {
    user: {
      username,
      password
    },
    isSuccess: false
  }

  const handleSubmit = (
    data: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    data.preventDefault()
    try {
      dispatch(tryLogin(userPaylod))
      dispatch(loginSuccess())
      navigate('/main')
    } catch (err) {
      dispatch(loginFailed())
    }
  }

  console.log('login render!')
  return (
        <Container maxWidth="sm">
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item
                        sx={{
                          boxShadow: 12,
                          border: '1px solid light'
                        }}
                    >
                        <LoginText>Login</LoginText>
                    </Item>

                    <InputField
                        label={'Username'}
                        type={''}
                        required={true}
                        value={username}
                        eventHandler={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => { handleUsername(e) }}
                    />

                    <InputField
                        label={'Password'}
                        type={'password'}
                        required={true}
                        value={password}
                        eventHandler={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => { handlePassword(e) }}
                    />

                    {/* <Item
                        sx={{
                            boxShadow: "unset",
                        }}
                    > */}
                    <BasicButton
                        label={submitLabel}
                        eventHandler={(
                          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                        ) => { handleSubmit(e) }}
                    />
                    {/* </Item> */}
                </Stack>
            </Box>
        </Container>
  )
}

export default Login
