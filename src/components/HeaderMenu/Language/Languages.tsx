import { useState } from 'react'
import { useIntl } from 'react-intl'
import { setLanguage, useLang } from '../../../i18/I18nContext'
import { CSSTransition } from 'react-transition-group';
import { Box, Icon, MenuItem, Text } from '@chakra-ui/react';

const languages = [
    {
        lang: 'en',
        name: 'English',
    },
    {
        lang: 'ja',
        name: 'Japanese',
    },
]

const Languages = ({ activeMenu, calcHeight, setActiveMenu }: any) => {
    const intl = useIntl()
    const lang = useLang()
    const [isOpen, setIsOpen] = useState(false)
    const currentLanguage = languages.find((x) => x.lang === lang)
    console?.log('currentLanguage', currentLanguage)
    return (
        <>
            <CSSTransition
                in={activeMenu === 'language'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu-container">
                    <MenuItem p='15px' onClick={() => setActiveMenu('main')}>
                        <Box display={'flex'}>
                            <Icon marginRight={'10px'} h={'24px'} w={'24px'} viewBox='0 0 24 24' color='white'>
                                <path d="M21.375 11.9991C21.375 12.2974 21.2565 12.5836 21.0455 12.7946C20.8345 13.0055 20.5484 13.1241 20.25 13.1241H6.46878L11.2988 17.9531C11.5101 18.1645 11.6289 18.4511 11.6289 18.75C11.6289 19.0489 11.5101 19.3355 11.2988 19.5469C11.0874 19.7582 10.8008 19.877 10.5019 19.877C10.203 19.877 9.91638 19.7582 9.70503 19.5469L2.95503 12.7969C2.85015 12.6924 2.76694 12.5682 2.71016 12.4314C2.65337 12.2947 2.62415 12.1481 2.62415 12C2.62415 11.8519 2.65337 11.7053 2.71016 11.5686C2.76694 11.4318 2.85015 11.3076 2.95503 11.2031L9.70503 4.45312C9.80968 4.34848 9.93391 4.26547 10.0706 4.20883C10.2074 4.1522 10.3539 4.12305 10.5019 4.12305C10.6499 4.12305 10.7964 4.1522 10.9332 4.20883C11.0699 4.26547 11.1941 4.34848 11.2988 4.45312C11.4034 4.55777 11.4864 4.682 11.5431 4.81873C11.5997 4.95546 11.6289 5.102 11.6289 5.25C11.6289 5.39799 11.5997 5.54454 11.5431 5.68126C11.4864 5.81799 11.4034 5.94223 11.2988 6.04687L6.46878 10.8741H20.25C20.5484 10.8741 20.8345 10.9926 21.0455 11.2036C21.2565 11.4145 21.375 11.7007 21.375 11.9991Z" fill="white" />
                            </Icon>
                            <Text fontSize={'16px'} fontWeight={'700'}>Back</Text>
                        </Box>
                    </MenuItem>
                    {languages?.map((l) =>
                        <MenuItem p='15px' onClick={() => setLanguage(l.lang)}>
                            <Box w={'100%'} display={'flex'} justifyContent={'space-between'}>
                                <Text fontSize={'16px'} fontWeight={'700'}>{l.name}</Text>
                                {l?.lang === currentLanguage?.lang &&
                                    <Box>
                                        <Icon marginRight={'10px'} h={'24px'} w={'24px'} viewBox='0 0 24 24' color='white'>
                                            <path d="M14.5306 5.0313L6.5306 13.0313C6.46092 13.1012 6.37813 13.1567 6.28696 13.1946C6.1958 13.2324 6.09806 13.2519 5.99935 13.2519C5.90064 13.2519 5.8029 13.2324 5.71173 13.1946C5.62057 13.1567 5.53778 13.1012 5.4681 13.0313L1.9681 9.5313C1.89833 9.46154 1.84299 9.37871 1.80524 9.28756C1.76748 9.19641 1.74805 9.09871 1.74805 9.00005C1.74805 8.90139 1.76748 8.80369 1.80524 8.71254C1.84299 8.62139 1.89833 8.53857 1.9681 8.4688C2.03786 8.39904 2.12069 8.3437 2.21184 8.30594C2.30299 8.26818 2.40069 8.24875 2.49935 8.24875C2.59801 8.24875 2.69571 8.26818 2.78686 8.30594C2.87801 8.3437 2.96083 8.39904 3.0306 8.4688L5.99997 11.4382L13.4693 3.97005C13.6102 3.82915 13.8013 3.75 14.0006 3.75C14.1999 3.75 14.391 3.82915 14.5318 3.97005C14.6727 4.11095 14.7519 4.30204 14.7519 4.5013C14.7519 4.70056 14.6727 4.89165 14.5318 5.03255L14.5306 5.0313Z" fill="white" />
                                        </Icon>
                                    </Box>
                                }
                            </Box>
                        </MenuItem>
                    )}

                </div>
            </CSSTransition>
        </>

    )
}

export { Languages }
