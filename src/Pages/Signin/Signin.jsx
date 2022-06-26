import React from 'react'
import { ExploreFundRaise, Navbar, Sidebar } from '../../components'
import { Box, Button, ButtonGroup, Flex , Image, SimpleGrid, Text} from '@chakra-ui/react'
import person from '../../images/person.png'
import {MdContentCopy} from 'react-icons/md'
import {BiDownload} from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'

const Signin = () => {

  const openSidebar = ()=>{
    document.getElementById("sidebar").style.width = "14rem";
  }

  return (
    <Box bg='#F5F5F5' overflowY='scrol'>
        <Navbar/>
        <Sidebar/>
        <AiOutlineMenu onClick={openSidebar} className='menu-icon'/>
        <Flex width='100%' 
                  justifyContent='center' 
                alignItems='center'
                flexDir={{base:'column',md:'column', lg:'row'}}
              >
            <Image
               borderRadius='full'
               boxSize='150px'
               src={person}
                alt='Dan Abramov'
            />
            <Box ml={3}>
                <Text
                 color='rgba(54, 49, 61, 1)'
                 fontSize='24px'
                 lineHeight='36px'
                 fontWeight='700'
                 textAlign={{base:'center',md:'center', lg:'none'}}
                >
                  Erika Martin</Text>
                  <Flex alignItems='center' pt={3} m='0 30px' justifyContent='space-between'><Text
                    color='#5C5866'
                    lineHeight ='22px'
                    font-size='16px'
                    mr={2}
                    flexWrap='wrap'
                  >0dh768jg803jgnna833ndldn02837 c74bs5la64p28v63v </Text><MdContentCopy color='rgba(194, 15, 162, 1)'/> <BiDownload color='rgba(194, 15, 162, 1)'/></Flex>
            </Box>
        </Flex>
        <SimpleGrid minChildWidth={{base:'200px',md:'300px',lg:'300px'}}  spacing={10} w='70%' m='20px auto'>
            <Flex bg='white' border='1px solid rgba(157, 153, 163, 1)'
               justifyContent={{sm:'center', md:'space-around', lg:'space-around'}}
               p={10}
               borderRadius='12px'
               flexDir={{lg:'row', md:'row', sm:'column'}}
               alignItems={{sm:'center', md:'none',lg:'none'}}
            >
                <Box>
                    <Text
                      color='rgba(157, 153, 163, 1)'
                      fontSize='16px'
                      lineHeight='24px'
                      fontWeight='700'
                    >Donations</Text>
                    <Text
                      color='rgba(69, 67, 82, 1)'
                      fontWeight='400'
                      fontSize='36px'
                      lineHeight='41px'
                    >1</Text>
                </Box>
                <Box>
                   <Text
                     color='rgba(157, 153, 163, 1)'
                     fontSize='16px'
                     lineHeight='24px'
                     fontWeight='700'
                   >Total Amount</Text>
                   <Text
                     color='rgba(69, 67, 82, 1)'
                     fontWeight='400'
                     fontSize='36px'
                     lineHeight='41px'
                   >400 ICP</Text>
                </Box>
            </Flex>
            <Flex bg='white' border='1px solid rgba(157, 153, 163, 1)'
               justifyContent={{sm:'center', md:'space-around', lg:'space-around'}}
               p={10}
               borderRadius='12px'
               flexDir={{lg:'row', md:'row', sm:'column'}}
               alignItems={{sm:'center', md:'none',lg:'none'}}
            >
                <Box>
                    <Text
                      color='rgba(157, 153, 163, 1)'
                      fontSize='16px'
                      lineHeight='24px'
                      fontWeight='700'
                    >Projects</Text>
                    <Text
                     color='rgba(69, 67, 82, 1)'
                     fontWeight='400'
                     fontSize='36px'
                     lineHeight='41px'
                    >1</Text>
                </Box>
                <Box>
                   <Text
                     color='rgba(157, 153, 163, 1)'
                     fontSize='16px'
                     lineHeight='24px'
                     fontWeight='700'
                   >Donations Received</Text>
                   <Text
                    color='rgba(69, 67, 82, 1)'
                    fontWeight='400'
                    fontSize='36px'
                    lineHeight='41px'
                   >200 ICP</Text>
                </Box>
            </Flex>
        </SimpleGrid>
        <ButtonGroup ml={{md:'30px', base:'0px', lg:'30px'}}>
            <Button className='btn-effect' fontSize='12px' lineHeight='18px' bg='rgba(194, 15, 162, 1)' fontWeight='500' color='white' borderRadius='20px'>Erika Martin's Project</Button>
            <Button className='btn-effect'fontSize='12px' lineHeight='18px' borderRadius='20px'>Donations</Button>
            <Button className='btn-effect' fontSize='12px' lineHeight='18px' borderRadius='20px'>Likes</Button>
        </ButtonGroup>
        <ExploreFundRaise/>
    </Box>
  )
}

export default Signin
