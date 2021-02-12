import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import fetchApi from '../../utils/fetching'

//importing styles
import '../custom.css'
import {
    Card,
    Nav,
    Container
} from 'react-bootstrap'

//importing components
import AboutPanel from './panels/AboutPanel';
import EvolutionPanel from './panels/EvolutionPanel';
import StatsPanel from './panels/StatsPanel'

const PokemonProfile = () => {

    //local states
    const [selectedTab, setSelectedTab] = useState('about')
    const [species, setSpecies] = useState(null)
    const [pokemonChain, setPokemonChain] = useState([])

    const pokemon = useSelector(state => state.pokemons.selectedPokemon)
    const pokemons = useSelector((state) => state.pokemons);

    useEffect(() => {

        const getPokemonsFromChain = (chain) => {

            let p = pokemons.pokemons.filter(item => item.name === chain.species.name)

            setPokemonChain(pokemonChain => [...pokemonChain, ...p])

            if(!chain.evolves_to.length) return

            chain.evolves_to.map(item => {
                getPokemonsFromChain(item)
            })
        }
        
        //fetching species and evolution chain
        const getSpecies = async() => {
            const specieData = await fetchApi(pokemon.species.url)
            const evChainData = await fetchApi(specieData.evolution_chain.url)

            getPokemonsFromChain(evChainData.chain)

            setSpecies(specieData)
        }
        getSpecies()
    
    }, [])

    const selectedTabHandler = (selectedKey) => {
        setSelectedTab(selectedKey)
    }

    return (
        <Container className="d-flex flex-wrap justify-content-center">
            <Card className="card text-white bg-dark m-3 custom-profile-card pri-font-family">
                <Card.Header className="card-header d-flex justify-content-center pb-0 text-capitalize">
                    <p className="h2">{pokemon.name}</p>
                </Card.Header>
                <Container className="d-flex justify-content-center">
                    <Card.Img
                        src={pokemon.sprites.front_default}
                        alt={'this is the pokemon ' + pokemon.name}
                        style={{width: '300px'}}
                    />
                </Container>
                <Card.Body className="d-flex justify-content-center">
                    <Nav
                        variant="pills"
                        activeKey={
                            (selectedTab === 'about' ? 'about' : null) ||
                            (selectedTab === 'evolutions' ? 'evolutions' : null) ||
                            (selectedTab === 'stats' ? 'stats' : null)
                        }
                        onSelect={(selectedKey) => selectedTabHandler(selectedKey)}
                    >
                        <Nav.Item className="custom-tab-item" >
                            <Nav.Link className="custom-tab-font"
                                eventKey="about">About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="custom-tab-item" >
                            <Nav.Link className="custom-tab-font" 
                                eventKey="evolutions">Evolutions
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="custom-tab-item" >
                            <Nav.Link className="custom-tab-font" 
                                eventKey="stats">Stats
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body>
                <hr className="m-0"/>
                <Container className="py-4">
                    {
                        (selectedTab === 'about' && species !== null ? <AboutPanel pokemon = {pokemon} species = {species}/> : null) ||
                        (selectedTab === 'evolutions' && pokemonChain !== null ? <EvolutionPanel pokemon = {pokemon} evChain = {pokemonChain} /> : null) ||
                        (selectedTab === 'stats' ? <StatsPanel pokemon = {pokemon}/> : null)
                    }
                </Container>
            </Card>
        </Container>
    )
}

export default PokemonProfile