//const hashedPassword = "$2a$14$ZubTV.NIdE/sILDucdWEsu9dhLNzmDXsgoLa/J0z3iKQqH7.kGaFm"

exports.seed = async function(knex) {
    return knex('users')
    .insert([
        {id:1, username:"testuser2", password:"password1234", department: "admin"},
        {id:2, username:"testuser3", password:"password5678", department: "staff"}
      ])
}

