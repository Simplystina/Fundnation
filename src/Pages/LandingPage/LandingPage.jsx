import React from 'react'
import { Box, Text, Button, Flex } from '@chakra-ui/react'
import './LandingPage.css'
import { Navbar, ExploreFundRaise, Sidebar} from '../../components'
import { extendTheme } from '@chakra-ui/react'
import {AiOutlineMenu} from 'react-icons/ai'


const LandingPage = () => {
  const openSidebar = ()=>{
    document.getElementById("sidebar").style.width = "14rem";
  }

  return (
   <> 
   <Box bg='rgba(98, 28, 190, 1)' pb='4rem'>
        <Navbar/>
        <Sidebar/>
        <AiOutlineMenu onClick={openSidebar} className='menu-icon'/>
        <Box>
          <Flex pt='7rem' justifyContent='center'
           alignItems='center'
           className='heading-texts'
             >
            <Text
              lineHeight={{ base:'70px', sm:'70px', md:'50px', lg:'73.6px'}}
              letterSpacing='1px'
              justifyContent='center'
              fontSize={{ base:'40px', sm:'40px', md:'50px', lg:'64px'}}
              fontFamily='Poppins'
              fontWeight='400'
              color='white'
              display='flex'
              className='heading-text1'
            >
                Welcome To
              </Text>
                <Text lineHeight={{ base:'60px', sm:'60px', md:'50px', lg:'73.6px'}}
                    letterSpacing='1px'
                    justifyContent='center'
                    fontSize={{ base:'60px', sm:'60px', md:'50px', lg:'64px'}}
                    fontFamily='Poppins'
                    color='white'
                     display='flex'
                     fontWeight='700' pl={2}
                     className='heading-text2'>
                     Fundnation
                </Text>
            
          </Flex>
            <Text
               lineHeight='36.6px'
               letterSpacing='1px'
               fontSize={{ base:'18px', sm:'20px', md:'24px', lg:'24px'}}
               fontFamily='Poppins'
               fontWeight='400'
               color='#FFF8FE'
               textAlign='center'
               mt='10px'
            >Donations on Blockchain</Text>
        </Box>
        <Button
            borderRadius='50px'
            bg='transparent'
            color='rgba(255, 169, 240, 1)'
            fontSize='14px'
            fontFamily='Poppins'
            lineHeight='24px'
            variant='solid'
            textTransform='uppercase'
            border='1px solid rgba(255, 169, 240, 1)'
            display='block'
            m='20px auto'
            className='btn-effect'
        >Button</Button>
    </Box>
    <ExploreFundRaise/>
    </>
  )
}


export default LandingPage
