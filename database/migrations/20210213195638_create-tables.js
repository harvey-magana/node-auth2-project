
exports.up = knex => {
  return knex.schema.createTable("users", t => {
    t.increments()
     .notNullable()
      .unique()
    t.string("username", 255)
     .notNullable()
     .unique();
    t.string("password", 255)
     .notNullable();
    t.string("department", 255)
     .notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("users");
};
