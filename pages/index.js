import Head from 'next/head'
import Image from 'next/image'
import { Plus_Jakarta_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { HStack, VStack, Text, Center, Spacer, Box } from '@chakra-ui/react'
import Notif from '@/ui/Notif'
import { useState } from 'react'

const jakartaSans = Plus_Jakarta_Sans({weight:['500','700'], subsets: ['latin'] })

export default function Home() {
  const [isRead, setIsRead] = useState([false, false, false, true, true, true, true]);
  const counter = isRead.filter(x => { return x=== false}).length
  function handleClick(index){
    const nextRead = isRead.map((item, idx) =>{
      return  idx == index?  true: item;
    })
    setIsRead(nextRead);
  }
  function markAll(){
    setIsRead(Array(7).fill(true));
  }
  return (
    <>
      <Head>
        <title>Notifications Page</title>
        <meta name="description" content="Generated by ida Nido" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className={jakartaSans.className}>
        <Box w='100vw' h='100%' bg="brand.paleGreyBlue" pt={{sm:'50px'}} pb={{sm:'80px'}} fontSize={{base:"14px", sm:"16px"}}>
          <VStack w={{base:'100%', sm:'50%'}}  p="15px" mx="auto" bg="white" borderRadius="15px"  >
            <HStack w='100%'>
              <Text fontSize="20px" color="brand.darkBlue" fontWeight='bold'>Notifications</Text>
              {
                counter > 0?
                  <Center boxSize='25px' bg="blue.700" color='white' borderRadius="5px">
                    <Box as='span' fontWeight='bold' fontSize='lg'>
                      {counter}
                    </Box>
                  </Center>
                  :<></>
              }
              
              <Spacer />
              <Text as="button" onClick={()=>markAll()} _hover={{color:"brand.blue"}}>Mark all as read</Text>
            </HStack>
            <Notif  name="Mark Webber"
                    isRead={isRead[0]}
                    srcImg="/images/avatar-mark-webber.webp"
                    alt="mark-webber"
                    content="reacted to your recent post "
                    bold="My first tournament today!"
                    time="1m ago"
                    pencet={()=>handleClick(0)}
                    imgW={{base:"40px", sm:"50px"}}
                     />
            <Notif  name="Angela Gray"
                    isRead={isRead[1]}
                    srcImg="/images/avatar-angela-gray.webp"
                    alt="angela-gray"
                    content="Followed you"
                    // bold="My first tournament today!"
                    time="5m ago"
                    imgW={{base:"40px", sm:"50px"}}
                    pencet={()=>handleClick(1)} />
            <Notif  name="Jacob Thompson"
                    isRead={isRead[2]}
                    srcImg="/images/avatar-jacob-thompson.webp"
                    alt="Jacob Thompson"
                    content="has joined your group"
                    bold="Chess Club"
                    time="1day ago"
                    imgW={{base:"40px", sm:"50px"}}
                    pencet={()=>handleClick(2)} />
            <Notif  name="Rizky Hasanuddin"
                    isRead={isRead[3]}
                    srcImg="/images/avatar-rizky-hasanuddin.webp"
                    alt="Rizky Hasanuddin"
                    content="sent you a private message"
                    comment="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game"
                    time="1day ago"
                    imgW={{base:"40px", sm:"50px"}}
                    pencet={()=>handleClick(3)} />
            <Notif  name="Kimberly Smith"
                    isRead={isRead[4]}
                    srcImg="/images/avatar-kimberly-smith.webp"
                    alt="Kimberly Smith"
                    content="comented on your picture "
                    commentImg="/images/image-chess.webp"
                    time="2 weeks ago" 
                    imgW={{base:"40px", sm:"50px"}}
                    pencet={()=>handleClick(4)}/>
            <Notif  name="Nathan Peterson"
                    isRead={isRead[5]}
                    srcImg="/images/avatar-nathan-peterson.webp"
                    alt="Nathan Peterson"
                    content="reacted to your recent post "
                    bold="5 end-game strategies to increase your win rate"
                    time="2 weeks ago" 
                    imgW={{base:"40px", sm:"50px"}}
                    pencet={()=>handleClick(5)} />
            <Notif  name="Anna Kim"
                    isRead={isRead[6]}
                    srcImg="/images/avatar-anna-kim.webp"
                    alt="Anna Kim"
                    content="left your group"
                    bold="Chess Club"
                    time="2 weeks ago"
                    imgW={{base:"40px", sm:"50px"}}
                    pencet={()=>handleClick(6)} />
            
          </VStack>
        </Box>
        
      </main>
    </>
  )
}
