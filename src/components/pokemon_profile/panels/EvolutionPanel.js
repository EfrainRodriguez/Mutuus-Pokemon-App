import React, {Fragment, useState, useEffect} from 'react'

//importing styles
import '../../custom.css'
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

const EvolutionPanel = ({pokemon, evChain}) => {

    const [previous, setPrevious] = useState(null)
    const [next, setNext] = useState(null)

    useEffect(() => {

        const getPrevAndNext = () => {
            let index = 0
            while(index < evChain.length){
                if(evChain[index].name === pokemon.name){
                    setPrevious(evChain[index - 1])
                    setNext(evChain[index + 1])
                    return
                }
                index++
            }
        }

        getPrevAndNext()

    }, [])

    return (
        <Fragment>
            <Row>
                <Col xs={12} md={6} className="mb-5">
                    <h4 className="text-center">Evolves from</h4>
                    {
                        previous ?
                        <Container>
                            
                            <Image className="mx-auto d-block"
                                src={previous.sprites.front_default}
                                alt={'this is the pokemon ' + previous.name}
                                style={{width: '150px'}}
                            /> 
                            <h5 className="text-center custom-label-font">{previous.name}</h5>
                        </Container> :
                        <Container>
                            <h5 className="text-center custom-label-font">Has no previous</h5>
                        </Container>
                    }
                </Col>
                <Col xs={12} md={6} className="mb-3">
                    <h4 className="text-center">Evolves to</h4>
                    {
                        next ?
                        <Container>
                            <Image className="mx-auto d-block"
                                src={next.sprites.front_default}
                                alt={'this is the pokemon ' + next.name}
                                style={{width: '150px'}}
                            /> 
                            <h5 className="text-center custom-label-font">{next.name}</h5>
                        </Container> :
                        <Container>
                            <h5 className="text-center custom-label-font">Has no next</h5>
                        </Container>
                    }
                </Col>
            </Row>
            <hr/>
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="my-5">
                    <h4 className="text-center">Whole evolution</h4>
                    {
                        evChain.map((item, i) => (
                            <Container key={i}>
                                <Image className="mx-auto d-block"
                                    src={item.sprites.front_default}
                                    alt={'this is the pokemon ' + item.name}
                                    style={{width: '150px'}}
                                /> 
                                <h5 className="text-center custom-label-font">{item.name}</h5>
                            </Container>
                        ))
                    }
                </Col>
            </Row>
        </Fragment>
    )
}

export default EvolutionPanel
