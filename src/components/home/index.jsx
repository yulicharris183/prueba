import React, { useState } from "react";
import { CustomForm } from "../form";
import { Container, Div, Sections, Title, SecondSections, Text, ThirdSection, TextSection, ContentBox, Box, Button, Span } from "./styled";

export const Home = () => {

    const [show, setShow] = useState(false)

    return (
        <Container>
            <Sections>
                <Title>Formulario de inscripción de proveedores</Title>
            </Sections>
            <SecondSections>
                <Text>Podrán inscribirse todas las personas interesadas en ser proveedores de bienes y servicios. Cualquier persona natural o jurídica podrá registrarse, cumpliendo con los requisitos exigidos y el procedimiento que la Empresa define para tal efecto.</Text>
                <br />
                <br />
                <Text>Teniendo en cuenta la estrategia de aprovisionamiento, la Empresa establece criterios de capacidad jurídica, financiera, técnica, administrativa, operativa y demás que se consideran pertinentes, con el fin de que los proveedores registrados puedan ser precalificados para las diferentes categorías de bienes y servicios, lo cual servirá de fuente de información para realizar solicitudes de ofertas, según los procedimientos establecidos en el Reglamento de Contratación.</Text>
                <br />
                <br />
                <Text>Para poder participar en los procesos de contratación de FINSOCIAL, es requisito para el proveedor, estar registrado en el sistema <strong style={{ color: '#E5137E' }}>diligenciando todos los datos solicitados a continuación.</strong></Text>
            </SecondSections>
            {show === false && <ThirdSection>
                <TextSection>Seleccione el tipo de persona bajo el cual desea realizar el registro</TextSection>
            </ThirdSection>}
            {show ===false ? <ContentBox>
                <Box>
                    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                        <img src='una.png' />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Text>Seleccione esta opción si usted es persona natural.</Text>
                        <br />
                        <Button onClick={() => setShow(!show)}><Span>INICIAR</Span></Button>
                    </div>
                </Box>
                <Box>
                    <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'center' }}>
                        <img src='varias.PNG' />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Text>Seleccione esta opción si usted es persona jurídica.</Text>
                        <br />
                        <Button><Span>INICIAR</Span></Button>
                    </div>
                </Box>
            </ContentBox> :
                <ContentBox>
                    <CustomForm />
                </ContentBox>}
            {show === false&& <Div>
                <label>
                    <input type="checkbox" /> acepta terminos y condiciones
                </label>
            </Div>}
        </Container>

    )
}