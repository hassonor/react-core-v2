export default function Tabs({children, buttons, ButtonsContainer = 'div'}) {
    return (<>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}