import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pokeAPI } from './pokeAPI';

const initialState = {
  loading:false,
  responseStatus:200,
  pokemonData:{}
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchPokemon(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPokemon = createAsyncThunk(
  'pokemon/pokeAPI',
  async (term) => {
    const response = await pokeAPI(term);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reset: (state) =>{
      state.loading = false;
      state.responseStatus = 200;
      state.pokemonData = {}
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
    .addCase(fetchPokemon.pending, (state) =>{
      state.loading = true;
    })
    .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;  
        state.responseStatus = action.payload.responseStatus;
        state.pokemonData = action.payload.pokemonData;
      });
  },
});

export const { reset } = pokemonSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectResponseStatus = (state) => state.pokemon.responseStatus;

export const selectPokemonData = (state) => state.pokemon.pokemonData;


export default pokemonSlice.reducer;
