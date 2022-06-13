import { Box, Text, SimpleGrid, Flex, ButtonGroup, Button, Avatar} from '@chakra-ui/react'
import React from 'react'
import {MdVerifiedUser} from 'react-icons/md'
import {IoIosFingerPrint} from 'react-icons/io'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiDownload} from 'react-icons/bi'
import { data } from '../exploreData'

const ExploreFundRaise = () => {
  return (
    <Box  bg='#F5F5F5' p='50px 30px' m={0}>
        <Text
          color='#36313D'
          fontFamily='Poppins'
          fontSize='36px'
          lineHeight='41px'
          fontWeight='600'
          m='40px 0'
        >
            Explore
        </Text>
        <SimpleGrid minChildWidth='120px' spacing='40px'>
            {
                data.map((item)=>{
                    const { title, name, text, amount_raised, target, img} = item
                    return (
            <Box bg='white' h='422px' borderRadius='12px' pos='relative'>
                <Box 
                  bgImage={`url(${img})`}
                  bgRepeat='no-repeat' 
                  bgSize='cover'
                  borderTopRadius='12px'
                  h='50%'>
                    <Flex justifyContent='space-between'>
                        <ButtonGroup>
                            <Button><MdVerifiedUser/> Veri</Button>
                            <Button></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button></Button>
                            <Avatar></Avatar>
                        </ButtonGroup>
                    </Flex>

                </Box>
                <Box p='30px 15px' bg='white' pos='absolute' bottom='-30px' borderRadius='12px'>
                    <Text
                       color='rgba(54, 49, 61, 1)'
                       fontFamily='Poppins'
                       fontSize='18px'
                       lineHeight='27px'
                       fontWeight='700'
                       textTransform='capitalize'
                    >{title}</Text>
                    <Text
                      color='rgba(194, 15, 162, 1)'                      
                      fontFamily='Poppins'
                      fontSize='14px'
                      lineHeight='21px'
                      fontWeight='400'
                      pb={2}
                    >{name}
                    </Text>
                    <Text
                      color='rgba(69, 67, 82, 1)'                      
                      fontFamily='Poppins'
                      fontSize='14px'
                      lineHeight='21px'
                      fontWeight='400'
                    >{text}</Text>
                    <Flex justifyContent='space-between' pt={2}>
                        <Flex justifyContent='space-between'
                            alignItems='center'>
                            <Text
                              color='rgba(54, 49, 61, 1)'                      
                              fontFamily='Poppins'
                              fontSize='16px'
                              lineHeight='24px'
                              fontWeight='700'
                            >{amount_raised} 1CP</Text>
                            <Text
                              color='rgba(69, 67, 82, 1)'                      
                              fontFamily='Poppins'
                              fontSize='12px'
                              lineHeight='18px'
                              fontWeight='400'
                              pl={1}
                            >Raised</Text>
                        </Flex>
                        <Text
                         color='rgba(92, 88, 102, 1)'                      
                         fontFamily='Poppins'
                         fontSize='12px'
                         lineHeight='18px'
                         fontWeight='400'
                         textAlign='right'
                         textTransform='uppercase'
                        >Amount goal: {target} ICP </Text>
                    </Flex>
                </Box>
            </Box>
                    
                    )
                })
            }
            
           
        </SimpleGrid>
    </Box>
  )
}

export default ExploreFundRaise
