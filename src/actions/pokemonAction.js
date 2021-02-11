//types
import {
    GET_POKEMONS_FIRST,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_ERROR,
    SET_SELECTED_POKEMON
} from '../types'

//fetch funtion
import fetchApi from '../utils/fetching'

/**
 * This action gets pokemon data from API
 * @param {string} url URL for fetching pokemon data from API
 */
export const getPokemonFirst = (url) => {
    return async (dispatch) => {

        dispatch(firstFetch())

        try {
            let pokemonGroup = await fetchApi(url)
            let pokemonList = await Promise.all(
                pokemonGroup.results.map(async pokemon => {
                    const pokemons = await fetchApi(pokemon.url)
                    return pokemons
                })
            )
            const data = {
                pokemons: pokemonList,
                nextUrl: pokemonGroup.next
            }
            dispatch(fetchPokemonsSucces(data))
        } catch (error) {
            dispatch(fetchPokemonsError())
        }
    }
}

/**
 * This action gets pokemon data from API
 * @param {string} url URL for fetching pokemon data from API
 */
export const getPokemonAction = (url) => {
    return async (dispatch) => {

        dispatch(firstFetch())

        try {
            let pokemonGroup = await fetchApi(url)
            let pokemonList = await Promise.all(
                pokemonGroup.results.map(async pokemon => {
                    const pokemons = await fetchApi(pokemon.url)
                    return pokemons
                })
            )
            const data = {
                pokemons: pokemonList,
                nextUrl: pokemonGroup.next
            }
            dispatch(fetchPokemonsSucces(data))
        } catch (error) {
            dispatch(fetchPokemonsError())
        }
    }
}

const firstFetch= () => ({
    type: GET_POKEMONS_FIRST,
    payload: false
})

const fetchPokemonsSucces = (data) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: data
})

const fetchPokemonsError = () => ({
    type: GET_POKEMONS_ERROR,
    payload: true
})

/**
 * Updates the state with selected pokemon
 * @param {object} pokemon selected pokemon
 */
export const setSelectedAction = (pokemon) => {
    return (dispatch) => {
        dispatch(setSelectedPokemon(pokemon))
    }
}

const setSelectedPokemon = (pokemon) => ({
    type: SET_SELECTED_POKEMON,
    payload: pokemon
})