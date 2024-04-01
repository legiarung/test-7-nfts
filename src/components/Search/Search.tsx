import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

export const Search = () => {
    return (
        <>
            <InputGroup>
                <InputLeftElement h={'48px'} pointerEvents='none'>
                    <SearchIcon h={'18px'} w={'18px'} color='gray.300' />
                </InputLeftElement>
                <Input border={'none'} focusBorderColor='purple.500' h='48px' backgroundColor={'#FFFFFF0A'} type='text' placeholder='Search for collections, NFTs or users' />
            </InputGroup>
        </>
    )
}
