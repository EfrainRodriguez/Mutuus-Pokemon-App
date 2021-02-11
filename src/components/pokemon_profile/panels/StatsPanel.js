import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'

//styles
import '../../custom.css'
import {
  Row,
  Col,
  ProgressBar,
  Form
} from 'react-bootstrap';

const StatsPanel = ({pokemon}) => {
    return (
        <Fragment>
            <Row>
                <Col xs={12} md={6} className="px-5">
                    <Form.Group className="mb-4">
                        <ProgressBar now={pokemon.stats[0].base_stat} label={`${pokemon.stats[0].base_stat}%`} />
                        <h5 className="text-center custom-label-font pt-2">HP</h5>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <ProgressBar now={pokemon.stats[1].base_stat} label={`${pokemon.stats[1].base_stat}%`} />
                        <h5 className="text-center custom-label-font pt-2">Attack</h5>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <ProgressBar now={pokemon.stats[2].base_stat} label={`${pokemon.stats[2].base_stat}%`} />
                        <h5 className="text-center custom-label-font pt-2">Defense</h5>
                    </Form.Group>          
                </Col>

                <Col xs={12} md={6} className="px-5">
                    <Form.Group className="mb-4">
                        <ProgressBar now={pokemon.stats[3].base_stat} label={`${pokemon.stats[3].base_stat}%`}/>
                        <h5 className="text-center custom-label-font pt-2">Special Attack</h5>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <ProgressBar now={pokemon.stats[4].base_stat} label={`${pokemon.stats[4].base_stat}%`} />
                        <h5 className="text-center custom-label-font pt-2">Special Defense</h5>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <ProgressBar now={pokemon.stats[5].base_stat} label={`${pokemon.stats[5].base_stat}%`} />
                        <h5 className="text-center custom-label-font pt-2">Speed</h5>
                    </Form.Group>
                </Col>
            </Row>
        </Fragment>
                
    )
}

export default StatsPanel
