import { Box } from '@chakra-ui/react'
import { ConnectWallet, darkTheme } from '@thirdweb-dev/react'
import React from 'react'
import { useIntl } from 'react-intl'

export const WalletConnectButton = () => {
    const intl = useIntl()
    return (
        <>
            <Box>
                <ConnectWallet
                    modalSize={"wide"}
                    theme={darkTheme({
                        colors: {
                            accentText: "",
                            accentButtonBg: "#FFFFFF0A",
                            modalBg: "#FFFFFF0A",
                            primaryText: "#ededef",
                            borderColor: "#262830",
                            separatorLine: "#262830",
                            danger: "#e54d2e",
                            success: "#5bb98c",
                            accentButtonText: "#FFFFFF0A",
                            primaryButtonBg: "#FFFFFF0A",
                            primaryButtonText: "#FFFFFF",
                            secondaryIconColor: "",
                        },
                    })}

                    btnTitle={intl.formatMessage({ id: 'MENU.LOGIN' })}
                    modalTitleIconUrl={""}
                    showThirdwebBranding={false}
                />
            </Box>
        </>
    )
}
