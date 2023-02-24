import { Box, HStack, Text,Circle, Image, Flex, Spacer, Link } from "@chakra-ui/react"
import {BsCircleFill} from 'react-icons/bs'
import { IconContext } from "react-icons"

export default function Notif({name, isRead, srcImg, alt, content, time, bold, comment, commentImg, pencet, imgW}){
    return <Box  bg={isRead ? "white": "brand.lightGreyBlue1"} borderRadius="10px" p="20px" w="100%"
    cursor={isRead? "auto":"pointer"}
    onClick={pencet}
    >
        <HStack alignItems='flex-start'>
            <Image src={srcImg} alt={alt} width={imgW} />
            <Box>
                    <Box><Text as="span">
                        <Text as="span" fontWeight="bold" 
                            display="inline-block" mr="5px" 
                            cursor="pointer" _hover={{color:"brand.blue"}}>{name}</Text>
                            {content} 
                            <Link _hover={{textDecor:"none", color:"brand.blue"}}>
                                <Text as="span" fontWeight="bold" color="brand.darkGreyBlue" mx="5px" 
                                _hover={{textDecor:"none", color:"brand.blue"}}>{bold}</Text>
                            </Link> 
                            {/* <Flex><Circle as="span" size="10px" bg="brand.red"></Circle></Flex> */}
                            

                        </Text>
                        {isRead === false?
                            <IconContext.Provider value={{style: {display:"inline-block", verticalAlign:"middle"}}}>
                                <BsCircleFill color="hsl(1, 90%, 64%)"  />
                            </IconContext.Provider>
                            : <></>
                        }
                        
                    </Box>
                <Text color="brand.greyBlue">{time}</Text>
            </Box>
            {commentImg? 
            <>
                <Spacer />
                    <Image src={commentImg} w={imgW} alt="Comented Picture" />
            </>:<></>
                    }
        </HStack>
        {comment?
        <HStack mt="10px">
            <Box minW="50px" minH="12px"></Box>
            {/* <Spacer w="50px" /> */}
            <Box borderRadius='5px' border="1px solid" borderColor="brand.greyBlue" p="15px" cursor="pointer"
            _hover={{bg:"brand.lightGreyBlue2"}}>
                <Text>{comment}</Text>
            </Box>
        </HStack>
           :<></>
        }
    </Box>   
}