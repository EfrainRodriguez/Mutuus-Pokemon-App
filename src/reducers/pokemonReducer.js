//types
import {
    GET_POKEMONS_FIRST,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_ERROR,
    SET_SELECTED_POKEMON
} from '../types'

const initialState = {
    pokemons: [],
    nextUrl: '',
    error: null,
    selectedPokemon: null,
    firstAccess: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_FIRST:
            return {
                ...state,
                firstAccess: action.payload,
                selectedPokemon: null
            }
        case GET_POKEMONS_SUCCESS:
            return{
                ...state,
                error: false,
                pokemons: [...state.pokemons, ...action.payload.pokemons],
                nextUrl: action.payload.nextUrl,
            }
        case GET_POKEMONS_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case SET_SELECTED_POKEMON:
            return{
                ...state,
                selectedPokemon: action.payload
            }
        default:
            return state
    }
}