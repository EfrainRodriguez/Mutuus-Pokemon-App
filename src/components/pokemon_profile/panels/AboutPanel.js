import React from 'react'

//styles
import '../../custom.css'
import {
  Row,
  Col,
  Form
} from 'react-bootstrap';

const PokemonPanel = ({pokemon, species}) => {
    
  return (
    <Row>
      <Col xs={12} md={4}>
        <Form.Group className="mb-4">
          <h3 className="text-center custom-text-font">
            {pokemon.abilities.map((ability, i) =>
              i === 0 ? ability.ability.name : " / " + ability.ability.name
            )}
          </h3>
          <h5 className="text-center custom-label-font">Abilities</h5>
        </Form.Group>
        <Form.Group className="mb-4">
          <h4 className="text-center custom-text-font">{pokemon.height * 10 + " cm"}</h4>
          <h5 className="text-center custom-label-font">Height</h5>
        </Form.Group>
        <Form.Group className="mb-4">
          <h3 className="text-center custom-text-font">{pokemon.weight / 10 + " Kg"}</h3>
          <h5 className="text-center custom-label-font">Weigth</h5>
        </Form.Group>          
      </Col>

      <Col xs={12} md={4}>
        <Form.Group className="mb-4">
          <h3 className="text-center custom-text-font">
            {
                pokemon.types.map((type, i) => (
                    i === 0 ? type.type.name : ' / ' + type.type.name
                ))
            }
          </h3>
          <h5 className="text-center custom-label-font">{pokemon.types.length > 1 ? 'Types' : 'Type'}</h5>
        </Form.Group>
        <Form.Group className="mb-4">
          <h4 className="text-center custom-text-font">
            {
              species.egg_groups.map((egg, i) => (
                i === 0 ? egg.name : ' / ' + egg.name
              ))
            }
          </h4>
          <h5 className="text-center custom-label-font">{species.egg_groups.length > 1 ? 'Egg groups' : 'Egg group'}</h5>
        </Form.Group>

        <Form.Group className="mb-4">
          <h4 className="text-center custom-text-font">
            {
              species.habitat.name
            }
          </h4>
          <h5 className="text-center custom-label-font">Habitat</h5>
        </Form.Group>
      </Col>

      <Col xs={12} md={4}>
        <Form.Group className="mb-4">
          <h4 className="text-center custom-text-font">
            {
                species.genera.map(gen => (
                  gen.language.name === 'en' ? gen.genus.replace(' Pokémon','') : null
                ))
            }
          </h4>
          <h5 className="text-center custom-label-font">Genus</h5>
        </Form.Group>
        <Form.Group className="mb-4">
          <h4 className="text-center custom-text-font">
            {
              species.shape.name
            }
          </h4>
          <h5 className="text-center custom-label-font">Shape</h5>
        </Form.Group>

        <Form.Group className="mb-4">
          <h4 className="text-center custom-text-font">
            {
              species.color.name
            }
          </h4>
          <h5 className="text-center custom-label-font">Color</h5>
        </Form.Group>
      </Col>
    </Row>
  );
}

export default PokemonPanel;