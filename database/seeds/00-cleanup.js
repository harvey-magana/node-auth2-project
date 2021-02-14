const cleaner = require("knex-cleaner");

function cleanTables(knex) {
    return cleaner  
        .clean(knex, {
            mode: 'truncate', 
            restartIdentity: true,
            ignoreTables: ['knex_migrations', 'knex_migration_lock'],
        })
        .then(() => console.log('\n== All tables truncated, ready to see ==\n'));
}

exports.seed = function (knex) {
    if(knex.client.config.client === 'sqlite3') {
        return knex.raw('PRAGMA foreign_keys = OFF;').then(() => cleanTables(knex));
    } else {
        return clearTables(knex);
    }
};