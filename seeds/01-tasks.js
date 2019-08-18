exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Study for the node Sprint this weekend.',
          notes: 'Check out the tk',
          completed: true
        },

        {
          description: 'Pass the Node Sprint challenge',
          completed: false
        }
      ]);
    });
};
