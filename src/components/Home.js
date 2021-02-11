import React, {useEffect} from 'react'

//redux
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonAction} from '../actions/pokemonAction'

import {Container} from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component';

//importing components
import PokemonCard from './PokemonCard'

//importing styles
import './custom.css'

const Home = () => {

  const url = "https://pokeapi.co/api/v2/pokemon";

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons)

  useEffect(() => {

    const getPokemons = () => dispatch(getPokemonAction(url));

    if(pokemons.firstAccess) getPokemons();

  }, []);

  const reFetching = () => {
    const getPokemons = () => dispatch(getPokemonAction(pokemons.nextUrl))
    getPokemons();
  };

  return (
    <Container className="d-flex flex-wrap justify-content-center">
      <InfiniteScroll
        dataLength={pokemons.pokemons.length}
        next={reFetching}
        hasMore={true}
        loader={
          <div className="text-primary overflow-hidden text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        className="d-flex flex-wrap justify-content-center"
      >
        {pokemons.pokemons.map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon} />
        ))}
      </InfiniteScroll>
    </Container>
  );
}

export default Home
