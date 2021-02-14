//const hashedPassword = "$2a$14$ZubTV.NIdE/sILDucdWEsu9dhLNzmDXsgoLa/J0z3iKQqH7.kGaFm"

exports.seed = async function(knex) {
    return knex('users')
    .insert([
        {id:3, username:"testuser2", password:"password1234", department: "admin"}
      ])
}

