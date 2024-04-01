import { Box, Container, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const FooterMenu = () => {
    return (
        <Container maxWidth={{ md: 1440, base: 390 }} backgroundColor={'#0E1114'} p={0} mt={{ md: '80px', base: '40px' }} >
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Flex maxWidth={{ md: 1300, base: 390 }} h={{ md: '262px', base: 'auto' }} align={'center'} justify={'center'} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                    <Box w={{ md: '50%', base: '100%' }} p={{ base: '24px', md: 0 }}>
                        <Flex w={'100%'} align={'center'} justify={{ base: 'center', md: 'start' }}  >
                            <Image boxSize='48px' src="/images/logo.svg" />
                            <Text fontWeight={700} fontSize={{ md: '20px', base: '18px' }} h='24px' px='10px'>
                                Multiple Crypto NFT Market
                            </Text>
                        </Flex>
                        <Text textAlign={{ base: 'center', md: 'start' }} pt={{ md: '24px', base: '24px' }} pr={{ md: '24px', base: 0 }} fontSize={'16px'} fontWeight={'400'} color={'#808489'}>
                            Donec ac tortor erat. Nulla commodo porttitor dolor eget consectetur. Vestibulum sagittis congue nibh at laoreet. Phasellus sed faucibus diam. Phasellus nec sagittis lorem, quis euismod elit.
                        </Text>
                    </Box>
                    <Box w={{ md: '50%', base: '100%' }} p={{ base: '24px', md: 0 }}>
                        <Grid templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(2, 1fr)' }} w={'100%'}  >
                            <GridItem colSpan={{ base: 1 }}>
                                <Flex w={'100%'} flexWrap={'wrap'}>
                                    <Box textAlign={{ base: 'center', md: 'start' }} fontSize={'18px'} fontWeight={700} w={'100%'}>Start</Box>
                                    <Box textAlign={{ base: 'center', md: 'start' }} mt={'15px'} fontWeight={400} fontSize={'16px'} color={'#808489'} w={'100%'}>About Us</Box>
                                    <Box textAlign={{ base: 'center', md: 'start' }} mt={'15px'} fontWeight={400} fontSize={'16px'} color={'#808489'} w={'100%'}>Careers</Box>
                                    <Box textAlign={{ base: 'center', md: 'start' }} mt={'15px'} fontWeight={400} fontSize={'16px'} color={'#808489'} w={'100%'}>Blog</Box>
                                </Flex>
                            </GridItem>
                            <GridItem colSpan={{ base: 1 }} >
                                <Flex w={'100%'} flexWrap={'wrap'}>
                                    <Box textAlign={{ base: 'center', md: 'start' }} fontSize={'18px'} fontWeight={700} w={'100%'}>Marketplace</Box>
                                    <Box textAlign={{ base: 'center', md: 'start' }} mt={'15px'} fontWeight={400} fontSize={'16px'} color={'#808489'} w={'100%'}>Explore</Box>
                                    <Box textAlign={{ base: 'center', md: 'start' }} mt={'15px'} fontWeight={400} fontSize={'16px'} color={'#808489'} w={'100%'}>Popular collection</Box>
                                    <Box textAlign={{ base: 'center', md: 'start' }} mt={'15px'} fontWeight={400} fontSize={'16px'} color={'#808489'} w={'100%'}>Launchpad</Box>
                                </Flex>
                            </GridItem>
                            <GridItem colSpan={{ base: 2, md: 2 }} display={{base:'flex', md:'block'}} justifyContent={{base:'center'}} alignItems={{base:'center'}} >
                                <Flex w={'100%'} flexWrap={'wrap'}>
                                    <Box textAlign={{ base: 'center', md: 'start' }} fontSize={'18px'} fontWeight={700} w={'100%'}>Join the community</Box>
                                    <Box mt={{ md: '24px', base: 0 }} w={'100%'}>
                                        <Flex justify={{ base: 'center', md: 'start' }}>
                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                borderRadius={'50%'}
                                                h={'48px'}
                                                w={'48px'}
                                                backgroundColor={'#FFFFFF0A'}
                                            >
                                                <Icon h={'24px'} w={'24px'} viewBox='0 0 24 24' fill="none" color='white'>
                                                    <path d="M17.7512 2.95996H20.818L14.1179 10.6177L22 21.0381H15.8284L10.9946 14.7182L5.46359 21.0381H2.39494L9.5613 12.8473L2 2.95996H8.32828L12.6976 8.73663L17.7512 2.95996ZM16.6748 19.2025H18.3742L7.4049 4.69917H5.58133L16.6748 19.2025Z" fill="white" />
                                                </Icon>
                                            </Box>
                                            <Box
                                                ml={'10px'}
                                                display={'flex'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                borderRadius={'50%'}
                                                h={'48px'}
                                                w={'48px'}
                                                backgroundColor={'#FFFFFF0A'}
                                            >
                                                <Icon h={'24px'} w={'24px'} viewBox='0 0 24 24' fill="none" color='white'>
                                                    <path d="M18.9419 5.68939C17.6279 5.0878 16.2407 4.66101 14.8158 4.41992C14.6208 4.76849 14.4443 5.12713 14.2872 5.49433C12.7694 5.26561 11.2258 5.26561 9.70801 5.49433C9.55079 5.12717 9.37437 4.76854 9.17946 4.41992C7.75361 4.66304 6.3655 5.09084 5.05016 5.69253C2.43887 9.55598 1.73099 13.3235 2.08493 17.0375C3.61417 18.1674 5.32582 19.0266 7.14548 19.578C7.55522 19.0269 7.91778 18.4423 8.22933 17.8303C7.63759 17.6093 7.06646 17.3366 6.52255 17.0155C6.6657 16.9116 6.8057 16.8047 6.94099 16.7008C8.52364 17.4451 10.251 17.831 12 17.831C13.7489 17.831 15.4763 17.4451 17.0589 16.7008C17.1958 16.8125 17.3358 16.9195 17.4774 17.0155C16.9324 17.3372 16.3602 17.6103 15.7675 17.8319C16.0786 18.4436 16.4412 19.0277 16.8513 19.578C18.6725 19.0288 20.3855 18.17 21.915 17.0391C22.3303 12.732 21.2055 8.99912 18.9419 5.68939ZM8.67765 14.7534C7.69134 14.7534 6.87649 13.8583 6.87649 12.7572C6.87649 11.656 7.66302 10.7531 8.6745 10.7531C9.68599 10.7531 10.4945 11.656 10.4772 12.7572C10.4599 13.8583 9.68284 14.7534 8.67765 14.7534ZM15.3223 14.7534C14.3344 14.7534 13.5227 13.8583 13.5227 12.7572C13.5227 11.656 14.3092 10.7531 15.3223 10.7531C16.3353 10.7531 17.1376 11.656 17.1203 12.7572C17.103 13.8583 16.3275 14.7534 15.3223 14.7534Z" fill="white" />
                                                </Icon>
                                            </Box>
                                            <Box
                                                ml={'10px'}
                                                display={'flex'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                borderRadius={'50%'}
                                                h={'48px'}
                                                w={'48px'}
                                                backgroundColor={'#FFFFFF0A'}
                                            >
                                                <Icon h={'24px'} w={'24px'} viewBox='0 0 24 24' fill="none" color='white'>
                                                    <path d="M20.75 10.1992C19.0297 10.2029 17.3517 9.66589 15.9531 8.66406V15.6484C15.9527 16.942 15.5574 18.2046 14.82 19.2673C14.0826 20.3301 13.0382 21.1424 11.8267 21.5955C10.6151 22.0487 9.29406 22.1211 8.04021 21.8031C6.78636 21.4852 5.65949 20.7919 4.81031 19.8161C3.96113 18.8404 3.43011 17.6286 3.28829 16.3428C3.14647 15.0571 3.40061 13.7587 4.0167 12.6213C4.6328 11.4839 5.58149 10.5617 6.73589 9.97812C7.89029 9.3945 9.19536 9.17727 10.4766 9.35547V12.8672C9.89073 12.6828 9.26161 12.6882 8.67902 12.8826C8.09644 13.077 7.59018 13.4506 7.23254 13.9499C6.8749 14.4492 6.68415 15.0487 6.68755 15.6629C6.69094 16.2771 6.8883 16.8744 7.25144 17.3698C7.61458 17.8651 8.12494 18.233 8.70964 18.421C9.29434 18.609 9.92348 18.6074 10.5072 18.4165C11.091 18.2256 11.5995 17.8552 11.9602 17.3581C12.3209 16.861 12.5153 16.2626 12.5156 15.6484V2H15.9531C15.9512 2.29073 15.976 2.58102 16.0273 2.86719C16.1469 3.50508 16.3953 4.11189 16.7573 4.65054C17.1193 5.1892 17.5873 5.64837 18.1328 6C18.9093 6.51283 19.8195 6.78588 20.75 6.78516V10.1992Z" fill="white" />
                                                </Icon>
                                            </Box>
                                            <Box
                                                ml={'10px'}
                                                display={'flex'}
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                borderRadius={'50%'}
                                                h={'48px'}
                                                w={'48px'}
                                                backgroundColor={'#FFFFFF0A'}
                                            >
                                                <Icon h={'24px'} w={'24px'} viewBox='0 0 24 24' fill="none" color='white'>
                                                    <path d="M22.2227 6.84766C21.9766 5.92187 21.2539 5.19531 20.3359 4.94922C18.6719 4.5 12 4.5 12 4.5C12 4.5 5.32812 4.5 3.66406 4.94922C2.74609 5.19531 2.02344 5.92187 1.77734 6.84766C1.33203 8.52344 1.33203 12.0156 1.33203 12.0156C1.33203 12.0156 1.33203 15.5078 1.77734 17.1836C2.02344 18.1094 2.74609 18.8047 3.66406 19.0508C5.32812 19.5 12 19.5 12 19.5C12 19.5 18.6719 19.5 20.3359 19.0508C21.2539 18.8047 21.9766 18.1055 22.2227 17.1836C22.668 15.5078 22.668 12.0156 22.668 12.0156C22.668 12.0156 22.668 8.52344 22.2227 6.84766ZM9.82031 15.1875V8.84375L15.3945 12.0156L9.82031 15.1875Z" fill="white" />
                                                </Icon>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </Container>
    )
}
