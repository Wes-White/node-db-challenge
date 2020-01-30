exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Webdb-i-challenge',
          description: 'Database Queries',
          completed: true
        },
        {
          name: 'Webdb-ii-challenge',
          description:
            'Write an API that can be used to manage Cars stored in a Relational Database.',
          completed: true
        },
        {
          name: 'Node DB Sprint',
          description:
            'In this challenge, you design and build a Data Model and a RESTful API that stores data into a Relational Database.',
          completed: false
        }
      ]);
    });
};
