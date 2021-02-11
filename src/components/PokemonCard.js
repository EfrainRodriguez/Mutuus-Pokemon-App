import React from 'react'
import {Link} from 'react-router-dom'

//redux
import {useDispatch} from 'react-redux'
import {setSelectedAction} from '../actions/pokemonAction'

//styles
import './custom.css'
import {
    Card,
    Row,
    Col,
    Image
} from 'react-bootstrap'

const PokemonCard = ({pokemon}) => {

    const dispatch = useDispatch()

    const currentPokemonHandler = (p) => dispatch(setSelectedAction(p))

    return (
        <Card className="card text-white bg-dark m-3 custom-card pri-font-family">
            <Card.Header className="card-header d-flex align-items-center text-capitalize">
                <p className="h2 mr-auto mb-0">{pokemon.name}</p>
                <p className="mb-0">{pokemon.id}</p>
            </Card.Header>
            <Card.Body className="row">
                <Col className="d-flex justify-content-center">
                    <Image className="mx-auto d-block"
                        src={pokemon.sprites.front_default}
                        alt={'this is the pokemon ' + pokemon.name}
                        style={{width: '200px'}}
                    />
                </Col>
                <Col className="align-self-center">
                    <Card.Title className="text-center">
                            {
                                pokemon.types.map((type, i) => (
                                    i === 0 ? type.type.name : ' / ' + type.type.name
                                ))
                            }
                    </Card.Title>
                    <Card.Text className="text-center custom-label-font">{pokemon.types.length > 1? 'Types' : 'Type'}</Card.Text>
                    <hr/>
                    <Row>
                        <Col>
                            <Card.Title className="text-center">{(pokemon.height * 10) + ' cm'}</Card.Title>
                            <Card.Text className="text-center custom-label-font">Height</Card.Text>
                        </Col>
                        <Col>
                            <Card.Title className="text-center">{(pokemon.weight / 10) + ' Kg'}</Card.Title>
                            <Card.Text className="text-center custom-label-font">Weigth</Card.Text>
                        </Col>
                    </Row>
                    <hr/>  
                </Col>
            </Card.Body>
            <Link to={'/profile'}
                className="btn btn-primary active mx-auto mb-3"
                onClick={() => currentPokemonHandler(pokemon)}
            >
                Details
            </Link>
        </Card>
    )
}

export default PokemonCard