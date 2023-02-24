import { Box, HStack, Text,Circle, Image } from "@chakra-ui/react"

export default function Notif({name, isRead, srcImg, alt, content, time, club, post}){
    return <Box bg={isRead ? "white": "brand.paleGreyBlue"} borderRadius="10px" p="20px" w="100%">
        <HStack>
            <Image src={srcImg} alt={alt} width="50px" />
            <Box><Text as="span" fontWeight="bold" mr="10px">{name}</Text>
                <Text as="span">{content}</Text>
                <Circle as="span" size="10px" bg="brand.red"></Circle>
                <Text as="span" fontWeight="bold" color="brand.greyBlue">{post}</Text>
                <Text as="span" fontWeight="bold" color="brand.darkBlue">{club}</Text>
                
                <Text>{time}</Text>
            </Box>
            
            
        </HStack>
    </Box>   
}