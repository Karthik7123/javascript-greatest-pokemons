// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    const fireTypePokemons = pokemons.filter((pokemon) =>
        pokemon.type.includes("Fire")
    );
    return fireTypePokemons;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    const shortPokemon = pokemons.reduce(
        (shortest, pokemon) => {
            const height = parseFloat(pokemon.height.replace("m", ""));
            return height < shortest.height ? pokemon : shortest;
        },
        { height: Infinity }
    );
    return shortPokemon.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    const totalCandyCount = pokemons.reduce(
        (acc, pokemon) => acc + pokemon.candy_count,
        0
    );
    return totalCandyCount / pokemons.length;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    const pikachuWeight = pokemons.find(
        (pokemon) => pokemon.name === "Pikachu"
    ).weight;

    const heavyPokemons = pokemons.filter((pokemon) => {
        const weight = parseFloat(pokemon.weight.replace(" kg", ""));
        return weight > pikachuWeight;
    });

    const heavyPokemonNames = heavyPokemons.map((pokemon) => pokemon.name);

    return heavyPokemonNames;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    const sortedPokemons = [...pokemons];
    sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
    const first20Names = sortedPokemons
        .slice(0, 20)
        .map((pokemon) => pokemon.name);

    console.log(first20Names);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
    const pokemonsWithOneWeakness = pokemons.filter(
        (pokemon) => pokemon.weaknesses.length === 1
    );
    const first15 = pokemonsWithOneWeakness.slice(0, 15);

    console.log(first15.map((pokemon) => pokemon.name));
}
