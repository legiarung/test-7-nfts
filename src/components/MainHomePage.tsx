import { Box, Container, Flex, Image, Text, Button, Spacer, Square, TableContainer, Thead, Table, Th, Tr, Tbody, Td, Avatar, Icon, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { ButtonTheme } from '../chakra-ui/buttontheme'
import { Languages } from './HeaderMenu/Language/Languages'

export const MainHomePage = () => {
    const collections = [
        {
            avatar: 'https://i.seadn.io/gae/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg?auto=format&dpr=1&w=384',
            name: 'Midady Maker',
            accountVerryfy: true,
            price: 3.19,
            symboy: 'ETH',
            volume: '855.3'
        },
        {
            avatar: 'https://i.seadn.io/gae/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg?auto=format&dpr=1&w=384',
            name: 'Midady Maker',
            accountVerryfy: true,
            price: 3.19,
            symboy: 'ETH',
            volume: '855.3'
        },
        {
            avatar: 'https://i.seadn.io/gae/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg?auto=format&dpr=1&w=384',
            name: 'Midady Maker',
            accountVerryfy: true,
            price: 3.19,
            symboy: 'ETH',
            volume: '855.3'
        },
        {
            avatar: 'https://i.seadn.io/gae/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg?auto=format&dpr=1&w=384',
            name: 'Midady Maker',
            accountVerryfy: true,
            price: 3.19,
            symboy: 'ETH',
            volume: '855.3'
        },
        {
            avatar: 'https://i.seadn.io/gae/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg?auto=format&dpr=1&w=384',
            name: 'Midady Maker',
            accountVerryfy: true,
            price: 3.19,
            symboy: 'ETH',
            volume: '855.3'
        }
    ]

    const trendingInGames = [
        {
            image: '/images/example/image-game-01.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        },
        {
            image: '/images/example/image-game-02.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        },
        {
            image: '/images/example/image-game-03.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        },
        {
            image: '/images/example/image-game-04.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        }
    ]

    const trendingInArts = [
        {
            image: '/images/example/image-art-01.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        },
        {
            image: '/images/example/image-art-02.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        },
        {
            image: '/images/example/image-art-03.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        },
        {
            image: '/images/example/image-art-04.png',
            price: 0.01,
            volume: 2,
            symboy: 'ETH'
        }
    ]

    const stakingList = [
        {
            image: '/images/example/image-art-01.png',
            name: 'Moonbirds',
        },
        {
            image: '/images/example/image-art-02.png',
            name: 'Lasogette',
        },
        {
            image: '/images/example/image-art-03.png',
            name: 'Milady Maker',
        },
        {
            image: '/images/example/image-art-04.png',
            name: 'Pixelmon - Generation 1',
        },
        {
            image: '/images/example/image-game-01.png',
            name: 'Persona',
        },

    ]
    return (
        <Container maxWidth={{ sm: '1300px', base: '390px' }} margin={'0 auto'} p={0} >

            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Flex flexWrap={{ base: 'wrap' }} bgImage={'/images/example/Rectangle.png'} w={'1300px'} h={{ base: 'auto', md: '590px' }}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={{ base: '100%', md: '50%' }}>
                        <Image objectFit='cover' src='/images/example/image6.png' alt='Example' />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={{ base: '100%', md: '50%' }}>
                        <Box p={{ base: '0', md: '40px' }} display={'flex'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
                            <Text align={{ base: 'center', md: 'start' }} w={'100%'} fontSize={'48px'} fontWeight={'700'} as='p'>Citizens of Mantle</Text>
                            <Text align={{ base: 'center', md: 'start' }} my={'30px'} fontSize={'16PX'} fontWeight={'400'}>Citizens of Mantle is a NFT collection by Mantle, one of the world’s largest DAO-led web3 ecosystems. Available on Mintle, the freshest marketplace on Mantle.</Text>
                            <Box display={'flex'} justifyContent={{ base: 'center', md: 'normal' }} w={'100%'}>
                                <Box
                                    cursor={'pointer'}
                                    height='48px'
                                    lineHeight='28px'
                                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    fontSize='18px'
                                    fontWeight='600'
                                    p={'2px'}
                                    bg={'linear-gradient(90deg, #29E9DD, #F99FAB)'}
                                    borderRadius='10px'
                                    color='#FFFFFF'
                                    _hover={{ bg: 'linear-gradient(90deg, #F99FAB, #29E9DD)', transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)' }}
                                    _active={{
                                        bg: '#dddfe2',
                                        transform: 'scale(0.98)',
                                        borderColor: '#bec3c9',
                                    }}
                                    _focus={{
                                        boxShadow:
                                            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                                    }}
                                >
                                    <Box background='#131619' p={'8px'} borderRadius={'8px'}>View Collection</Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Flex>
            </Box>
            {/* //collection */}
            {/* <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={'80px'}>
                <Box w={{ base: '390px', md: '1300px' }}>
                    <Flex flexWrap={{ base: 'wrap' }} >
                        <Box>
                            <Text fontSize={'32px'} fontWeight={700}>Top collection</Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Flex>
                                <Box>
                                    <Flex
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        fontWeight={600}
                                        display={'flex'}
                                        borderRadius={'md'}
                                        px={'5px'}
                                        h={'48px'}
                                        cursor={'pointer'}
                                        backgroundColor={'#FFFFFF0A'}>
                                        <Square borderRadius={'md'} fontSize={'16px'} px={'15px'} backgroundColor={'#131619'} minHeight={'40px'}>1H</Square>
                                        <Square px={'15px'} fontSize={'16px'} color={'##808489'} minHeight={'40px'}>1D</Square>
                                        <Square px={'15px'} fontSize={'16px'} color={'##808489'} minHeight={'40px'}>7D</Square>
                                        <Square px={'15px'} fontSize={'16px'} color={'##808489'} minHeight={'40px'}>30D</Square>
                                    </Flex>
                                </Box>
                                <Box
                                    cursor={'pointer'}
                                    ml={'15px'}
                                    fontSize={'18px'}
                                    fontWeight={600}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    borderRadius={'md'}
                                    h={'48px'}
                                    px={'20px'}
                                    backgroundColor={'#FFFFFF0A'}>
                                    View all
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box mt={'40px'}>
                        <Flex flexWrap={{ base: 'wrap' }} justifyContent={{ base: '', md: 'space-between' }}>
                            <Box w={'47%'}>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead color={'#515458'} fontSize={'16px'} fontWeight={400}>
                                            <Tr>
                                                <Th>#</Th>
                                                <Th>Collection</Th>
                                                <Th isNumeric>Floor Price</Th>
                                                <Th isNumeric>Volume</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {collections?.map(((c, i: number) =>
                                                <Tr key={i}>
                                                    <Td color={'#808489'}>{i}</Td>
                                                    <Td fontSize={'16px'} fontWeight={700}>
                                                        <Flex align={'center'}>
                                                            <Box>
                                                                <Image borderRadius={'md'} h={'56px'} w={'56px'} src={c.avatar} />
                                                            </Box>
                                                            <Flex ml={'15px'}>
                                                                <Text color={'#FFFFFF'}>{c?.name}</Text>
                                                                {c?.accountVerryfy &&
                                                                    <Box ml={'5px'}>
                                                                        <Icon h={'16px'} w={'16px'} viewBox='0 0 16 16' fill="none" color='white'>
                                                                            <path d="M14.1163 6.42625C13.8806 6.18 13.6369 5.92625 13.545 5.70312C13.46 5.49875 13.455 5.16 13.45 4.83187C13.4406 4.22187 13.4306 3.53062 12.95 3.05C12.4694 2.56937 11.7781 2.55937 11.1681 2.55C10.84 2.545 10.5013 2.54 10.2969 2.455C10.0744 2.36312 9.82 2.11937 9.57375 1.88375C9.1425 1.46937 8.6525 1 8 1C7.3475 1 6.85812 1.46937 6.42625 1.88375C6.18 2.11937 5.92625 2.36312 5.70312 2.455C5.5 2.54 5.16 2.545 4.83187 2.55C4.22187 2.55937 3.53062 2.56937 3.05 3.05C2.56937 3.53062 2.5625 4.22187 2.55 4.83187C2.545 5.16 2.54 5.49875 2.455 5.70312C2.36312 5.92562 2.11937 6.18 1.88375 6.42625C1.46937 6.8575 1 7.3475 1 8C1 8.6525 1.46937 9.14187 1.88375 9.57375C2.11937 9.82 2.36312 10.0737 2.455 10.2969C2.54 10.5013 2.545 10.84 2.55 11.1681C2.55937 11.7781 2.56937 12.4694 3.05 12.95C3.53062 13.4306 4.22187 13.4406 4.83187 13.45C5.16 13.455 5.49875 13.46 5.70312 13.545C5.92562 13.6369 6.18 13.8806 6.42625 14.1163C6.8575 14.5306 7.3475 15 8 15C8.6525 15 9.14187 14.5306 9.57375 14.1163C9.82 13.8806 10.0737 13.6369 10.2969 13.545C10.5013 13.46 10.84 13.455 11.1681 13.45C11.7781 13.4406 12.4694 13.4306 12.95 12.95C13.4306 12.4694 13.4406 11.7781 13.45 11.1681C13.455 10.84 13.46 10.5013 13.545 10.2969C13.6369 10.0744 13.8806 9.82 14.1163 9.57375C14.5306 9.1425 15 8.6525 15 8C15 7.3475 14.5306 6.85812 14.1163 6.42625ZM10.8538 6.85375L7.35375 10.3538C7.30731 10.4002 7.25217 10.4371 7.19147 10.4623C7.13077 10.4874 7.06571 10.5004 7 10.5004C6.93429 10.5004 6.86923 10.4874 6.80853 10.4623C6.74783 10.4371 6.69269 10.4002 6.64625 10.3538L5.14625 8.85375C5.05243 8.75993 4.99972 8.63268 4.99972 8.5C4.99972 8.36732 5.05243 8.24007 5.14625 8.14625C5.24007 8.05243 5.36732 7.99972 5.5 7.99972C5.63268 7.99972 5.75993 8.05243 5.85375 8.14625L7 9.29313L10.1462 6.14625C10.1927 6.09979 10.2479 6.06294 10.3086 6.0378C10.3692 6.01266 10.4343 5.99972 10.5 5.99972C10.5657 5.99972 10.6308 6.01266 10.6914 6.0378C10.7521 6.06294 10.8073 6.09979 10.8538 6.14625C10.9002 6.1927 10.9371 6.24786 10.9622 6.30855C10.9873 6.36925 11.0003 6.4343 11.0003 6.5C11.0003 6.5657 10.9873 6.63075 10.9622 6.69145C10.9371 6.75214 10.9002 6.8073 10.8538 6.85375Z" fill="#2FB551" />
                                                                        </Icon>
                                                                    </Box>
                                                                }
                                                            </Flex>
                                                        </Flex>
                                                    </Td>
                                                    <Td isNumeric fontSize={'16px'} fontWeight={700} color={'#FFFFFF'}>
                                                        <Flex justifyContent={'end'}>
                                                            <Text>{c?.price}</Text>
                                                            <Text ml={'5px'} color={'#808489'}>{c?.symboy}</Text>
                                                        </Flex>
                                                    </Td>
                                                    <Td isNumeric fontSize={'16px'} fontWeight={700} color={'#FFFFFF'}>
                                                        <Flex justifyContent={'end'}>
                                                            <Text>{c?.volume}</Text>
                                                            <Text ml={'5px'} color={'#808489'}>{c?.symboy}</Text>
                                                        </Flex>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box w={'47%'}>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead color={'#515458'} fontSize={'16px'} fontWeight={400}>
                                            <Tr>
                                                <Th>#</Th>
                                                <Th>Collection</Th>
                                                <Th isNumeric>Floor Price</Th>
                                                <Th isNumeric>Volume</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {collections?.map(((c, i: number) =>
                                                <Tr key={i}>
                                                    <Td color={'#808489'}>{i}</Td>
                                                    <Td fontSize={'16px'} fontWeight={700}>
                                                        <Flex align={'center'}>
                                                            <Box>
                                                                <Image borderRadius={'md'} h={'56px'} w={'56px'} src={c.avatar} />
                                                            </Box>
                                                            <Flex ml={'15px'}>
                                                                <Text color={'#FFFFFF'}>{c?.name}</Text>
                                                                {c?.accountVerryfy &&
                                                                    <Box ml={'5px'}>
                                                                        <Icon h={'16px'} w={'16px'} viewBox='0 0 16 16' fill="none" color='white'>
                                                                            <path d="M14.1163 6.42625C13.8806 6.18 13.6369 5.92625 13.545 5.70312C13.46 5.49875 13.455 5.16 13.45 4.83187C13.4406 4.22187 13.4306 3.53062 12.95 3.05C12.4694 2.56937 11.7781 2.55937 11.1681 2.55C10.84 2.545 10.5013 2.54 10.2969 2.455C10.0744 2.36312 9.82 2.11937 9.57375 1.88375C9.1425 1.46937 8.6525 1 8 1C7.3475 1 6.85812 1.46937 6.42625 1.88375C6.18 2.11937 5.92625 2.36312 5.70312 2.455C5.5 2.54 5.16 2.545 4.83187 2.55C4.22187 2.55937 3.53062 2.56937 3.05 3.05C2.56937 3.53062 2.5625 4.22187 2.55 4.83187C2.545 5.16 2.54 5.49875 2.455 5.70312C2.36312 5.92562 2.11937 6.18 1.88375 6.42625C1.46937 6.8575 1 7.3475 1 8C1 8.6525 1.46937 9.14187 1.88375 9.57375C2.11937 9.82 2.36312 10.0737 2.455 10.2969C2.54 10.5013 2.545 10.84 2.55 11.1681C2.55937 11.7781 2.56937 12.4694 3.05 12.95C3.53062 13.4306 4.22187 13.4406 4.83187 13.45C5.16 13.455 5.49875 13.46 5.70312 13.545C5.92562 13.6369 6.18 13.8806 6.42625 14.1163C6.8575 14.5306 7.3475 15 8 15C8.6525 15 9.14187 14.5306 9.57375 14.1163C9.82 13.8806 10.0737 13.6369 10.2969 13.545C10.5013 13.46 10.84 13.455 11.1681 13.45C11.7781 13.4406 12.4694 13.4306 12.95 12.95C13.4306 12.4694 13.4406 11.7781 13.45 11.1681C13.455 10.84 13.46 10.5013 13.545 10.2969C13.6369 10.0744 13.8806 9.82 14.1163 9.57375C14.5306 9.1425 15 8.6525 15 8C15 7.3475 14.5306 6.85812 14.1163 6.42625ZM10.8538 6.85375L7.35375 10.3538C7.30731 10.4002 7.25217 10.4371 7.19147 10.4623C7.13077 10.4874 7.06571 10.5004 7 10.5004C6.93429 10.5004 6.86923 10.4874 6.80853 10.4623C6.74783 10.4371 6.69269 10.4002 6.64625 10.3538L5.14625 8.85375C5.05243 8.75993 4.99972 8.63268 4.99972 8.5C4.99972 8.36732 5.05243 8.24007 5.14625 8.14625C5.24007 8.05243 5.36732 7.99972 5.5 7.99972C5.63268 7.99972 5.75993 8.05243 5.85375 8.14625L7 9.29313L10.1462 6.14625C10.1927 6.09979 10.2479 6.06294 10.3086 6.0378C10.3692 6.01266 10.4343 5.99972 10.5 5.99972C10.5657 5.99972 10.6308 6.01266 10.6914 6.0378C10.7521 6.06294 10.8073 6.09979 10.8538 6.14625C10.9002 6.1927 10.9371 6.24786 10.9622 6.30855C10.9873 6.36925 11.0003 6.4343 11.0003 6.5C11.0003 6.5657 10.9873 6.63075 10.9622 6.69145C10.9371 6.75214 10.9002 6.8073 10.8538 6.85375Z" fill="#2FB551" />
                                                                        </Icon>
                                                                    </Box>
                                                                }
                                                            </Flex>
                                                        </Flex>
                                                    </Td>
                                                    <Td isNumeric fontSize={'16px'} fontWeight={700} color={'#FFFFFF'}>
                                                        <Flex justifyContent={'end'}>
                                                            <Text>{c?.price}</Text>
                                                            <Text ml={'5px'} color={'#808489'}>{c?.symboy}</Text>
                                                        </Flex>
                                                    </Td>
                                                    <Td isNumeric fontSize={'16px'} fontWeight={700} color={'#FFFFFF'}>
                                                        <Flex justifyContent={'end'}>
                                                            <Text>{c?.volume}</Text>
                                                            <Text ml={'5px'} color={'#808489'}>{c?.symboy}</Text>
                                                        </Flex>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Flex>

                    </Box>
                </Box>
            </Box> */}
            {/* //trending in game */}
            {/* <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={'80px'}>
                <Box maxW={{ base: '390px', md: '1300px' }}>
                    <Flex >
                        <Box>
                            <Text fontSize={'32px'} fontWeight={700}>Trending in Gaming</Text>
                        </Box>
                        <Spacer />
                        <Box
                            cursor={'pointer'}
                            ml={'15px'}
                            fontSize={'18px'}
                            fontWeight={600}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderRadius={'md'}
                            h={'48px'}
                            px={'20px'}
                            backgroundColor={'#FFFFFF0A'}>
                            View more
                        </Box>
                    </Flex>
                    <Grid mt={'40px'} templateColumns='repeat(4, 1fr)' gap={6}>
                        {trendingInGames?.map((t, i) =>
                            <GridItem key={i} borderRadius={'md'} w='100%' bg='#FFFFFF0A' >
                                <Image h={'304px'} src={t?.image} />
                                <Box p={'20px'}>
                                    <Text fontSize={'18px'} fontWeight={700}>The Beacon</Text>
                                    <Grid mt={'10px'} templateColumns='repeat(2, 1fr)' gap={4}>
                                        <GridItem>
                                            <Text fontSize={'14px'} fontWeight={400} color={'#808489'}>Floor</Text>
                                            <Text fontSize={'18px'} fontWeight={700}> {t?.price} {t?.symboy}</Text>
                                        </GridItem>
                                        <GridItem>
                                            <Text fontSize={'14px'} fontWeight={400} color={'#808489'}>Floor</Text>
                                            <Text fontSize={'18px'} fontWeight={700}> {t?.volume} {t?.symboy}</Text>
                                        </GridItem>
                                    </Grid>
                                </Box>
                            </GridItem>
                        )}

                    </Grid>
                </Box>
            </Box> */}
            {/* //trending in art */}
            {/* <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={'80px'}>
                <Box w={'1300px'}>
                    <Flex >
                        <Box>
                            <Text fontSize={'32px'} fontWeight={700}>Trending in Art</Text>
                        </Box>
                        <Spacer />
                        <Box
                            cursor={'pointer'}
                            ml={'15px'}
                            fontSize={'18px'}
                            fontWeight={600}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderRadius={'md'}
                            h={'48px'}
                            px={'20px'}
                            backgroundColor={'#FFFFFF0A'}>
                            View more
                        </Box>
                    </Flex>
                    <Grid mt={'40px'} templateColumns='repeat(4, 1fr)' gap={6}>
                        {trendingInArts?.map((t, i) =>
                            <GridItem key={i} borderRadius={'md'} w='100%' bg='#FFFFFF0A' >
                                <Image h={'304px'} src={t?.image} />
                                <Box p={'20px'}>
                                    <Text fontSize={'18px'} fontWeight={700}>The Beacon</Text>
                                    <Grid mt={'10px'} templateColumns='repeat(2, 1fr)' gap={4}>
                                        <GridItem>
                                            <Text fontSize={'14px'} fontWeight={400} color={'#808489'}>Floor</Text>
                                            <Text fontSize={'18px'} fontWeight={700}> {t?.price} {t?.symboy}</Text>
                                        </GridItem>
                                        <GridItem>
                                            <Text fontSize={'14px'} fontWeight={400} color={'#808489'}>Floor</Text>
                                            <Text fontSize={'18px'} fontWeight={700}> {t?.volume} {t?.symboy}</Text>
                                        </GridItem>
                                    </Grid>
                                </Box>
                            </GridItem>
                        )}

                    </Grid>
                </Box>
            </Box> */}
            {/* //staking list*/}
            {/* <Box display={'flex'} alignItems={'center'} justifyContent={'center'} my={'80px'}>
                <Box w={'1300px'}>
                    <Flex >
                        <Box>
                            <Text fontSize={'32px'} fontWeight={700}>Staking list</Text>
                        </Box>
                        <Spacer />
                        <Box
                            cursor={'pointer'}
                            ml={'15px'}
                            fontSize={'18px'}
                            fontWeight={600}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderRadius={'md'}
                            h={'48px'}
                            px={'20px'}
                            backgroundColor={'#FFFFFF0A'}>
                            View more
                        </Box>
                    </Flex>
                    <Grid mt={'10px'} templateColumns='repeat(2, 1fr)' gap={12}>
                        <GridItem px={'10px'}>
                            <Box>
                                <Grid mt={'10px'} templateColumns='repeat(2, 1fr)' gap={6}>
                                    {stakingList?.map((s, i) =>
                                        <>
                                            <GridItem key={i} >
                                                <Flex align={'center'}>
                                                    <Box>
                                                        <Image borderRadius={'md'} h={'56px'} w={'56px'} src={s?.image} />
                                                    </Box>
                                                    <Text ml={'10px'} fontWeight={'700'} fontSize={'16px'} color={'#FFFFFF'}>{s?.name}</Text>
                                                </Flex>
                                            </GridItem>
                                            <GridItem display={'flex'} justifyContent={'end'} alignItems={'center'}>
                                                <Box
                                                    as='button'
                                                    height='40px'
                                                    px='15px'
                                                    fontSize='16px'
                                                    fontWeight='600'
                                                    bg='#FFFFFF0A'
                                                    borderRadius='md'
                                                    color='#FFFFFF'
                                                    sx={{
                                                        border: '2px solid ',
                                                        borderImage: 'linear-gradient(90deg, #29E9DD, #F99FAB) 1;',
                                                        _hover: 'linear-gradient(45deg, #F99FAB, #29E9DD) 1;',
                                                        color: '#FFFFFF'
                                                    }}
                                                >
                                                    Stacking
                                                </Box>

                                            </GridItem>
                                        </>
                                    )}
                                </Grid>
                            </Box>

                        </GridItem>
                        <GridItem px={'10px'}>
                            <Box>
                                <Grid mt={'10px'} templateColumns='repeat(2, 1fr)' gap={10}>
                                    <GridItem >
                                        <Flex align={'center'}>
                                            <Box>
                                                <Image borderRadius={'md'} h={'56px'} w={'56px'} src={'/images/example/image-game-01.png'} />
                                            </Box>
                                            <Text ml={'10px'} fontWeight={'700'} fontSize={'16px'} color={'#FFFFFF'}>Lasogette</Text>
                                        </Flex>
                                    </GridItem>
                                    <GridItem>
                                        <Flex justifyContent={'end'} alignItems={'center'}>
                                            <Box
                                                as='button'
                                                height='40px'
                                                px='15px'
                                                fontSize='16px'
                                                fontWeight='600'
                                                bg='#FFFFFF0A'
                                                borderRadius='md'
                                                color='#FFFFFF'
                                                sx={{
                                                    border: '2px solid ',
                                                    borderImage: 'linear-gradient(90deg, #29E9DD, #F99FAB) 1;',
                                                    _hover: 'linear-gradient(45deg, #F99FAB, #29E9DD) 1;',
                                                    color: '#FFFFFF'
                                                }}
                                            >
                                                Stacking
                                            </Box>
                                        </Flex>

                                    </GridItem>
                                </Grid>
                            </Box>

                        </GridItem>
                    </Grid>
                </Box>
            </Box> */}
        </Container>
    )
}
