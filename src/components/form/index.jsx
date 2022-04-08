import { ButtonNext, Container, Flex, Input, Select } from './styled'

export const CustomForm = () => {
    return (
        <Container>
            <h2 style={{ color: '#868686' }} >1.1. Identificacion del proveedor</h2>
            <Flex marginB='20px'>
                <Input required width='45%' placeholder='Nombres' />
                <Input required width='45%' placeholder='Apellidos' />
            </Flex>
            <Flex marginB='20px'>
                <Input required width='28%' placeholder='Nit/Cédula' />
                <Input required width='28%' placeholder='Dirección' />
                <Select required width='31.2%' placeholder='Ciudad' />
            </Flex>
            <Flex marginB='20px'>
                <Input type='tel' required width='28%' placeholder='Teléfono' />
                <Input type='email' required width='28%' placeholder='Correo' />
                <Input required width='28%' placeholder='Describa producto o servicio' />
            </Flex>
            <h2 style={{ color: '#868686' }} >1.2. Identificacion de contacto</h2>
            <Flex marginB='20px'>
                <Input required width='28%' placeholder='Nombre' />
                <Input required width='28%' placeholder='Apellido' />
                <Input required width='28%' placeholder='Cargo' />
            </Flex>
            <Flex marginB='20px'>
                <Input type='email' required width='45%' placeholder='Correo electrónico' />
                <Input type='tel' required width='45%' placeholder='Teléfono' />
            </Flex>
            <Flex style={{ justifyContent: 'flex-end' }}>
                <ButtonNext>SIGUIENTE</ButtonNext>
            </Flex>
        </Container>
    )
}