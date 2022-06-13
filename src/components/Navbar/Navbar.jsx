import { Avatar, Button, Flex, Img, Box} from '@chakra-ui/react'
import React from 'react'
import './Navbar.css'
import logo from '../../images/Logo.png'
import {IoWalletOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box m='0 30px'>
        <Flex justifyContent='space-between'>
            <Flex w='25%' justifyContent='space-between' alignItems='center'>
               <Img mt='10px' boxSize='70px'objectFit='cover' src={logo} alt='logo'/>
               <Button 
                 borderRadius='50px'
                 color='rgba(92, 88, 102, 1)'
                 fontSize='14px'
                 fontFamily='Poppins'
                 letterSpacing='2%'
                 variant='solid'
               >Projects</Button>
            </Flex>
            <Flex  w='30%' justifyContent='space-between' alignItems='center'>
                <Button
                   borderRadius='50px'
                   bg='rgba(194, 15, 162, 1)'
                   color='white'
                   fontSize='14px'
                   fontFamily='Poppins'
                   lineHeight='24px'
                   variant='solid'
                   textTransform='uppercase'
                >Create a Project</Button>
                <Link to='signin'><Button
                  borderRadius='50px'
                  bg='rgba(194, 15, 162, 1)'
                  color='white'
                  fontSize='14px'
                  fontFamily='Poppins'
                  lineHeight='24px'
                  variant='solid'
                  textTransform='uppercase'
                >Sign in</Button></Link>
                <Avatar bg='rgba(194, 15, 162, 1)' color='white' icon={<IoWalletOutline fontSize='1.5rem'/>}></Avatar>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
