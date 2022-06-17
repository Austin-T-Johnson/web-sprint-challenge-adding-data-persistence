
exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    { resource_name: "Wood", resource_description: "It's wood..." },

    { resource_name: "Ladder", resource_description: "It's a ladder..."},

    { resource_name: "Hyperbolic Time Chamber", resource_description: "a dimension with a time dilation which causes one day outside the chamber to be expanded into one year inside."},
    
    { resource_name: "Flux Capacitor", resource_description: "Plutonium is required to properly operate the flux capacitor. Requires the stainless steel body of a 1981-1983 DeLorean DMC-12 to properly function. "}
  ])
};
