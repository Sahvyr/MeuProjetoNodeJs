const { z } = require("zod");

const pokemonSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3),
  types: z.array(z.string()).min(1),
  evolution_stage: z.number().int().min(1).max(3),
});

class Pokemon {
  constructor(data) {
    const validatedData = pokemonSchema.parse(data);

    this.id = validatedData.id;
    this.name = validatedData.name;
    this.types = validatedData.types;
    this.evolution_stage = validatedData.evolution_stage;
  }
}

module.exports = Pokemon;
