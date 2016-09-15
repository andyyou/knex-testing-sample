var knex = require('./knex.js')

function Shows () {
  return knex('shows')
}

function getAll () {
  return Shows().select().orderBy('id', 'asc')
}

function getSingle (showId) {
  return Shows().where('id', ~~showId).first()
}

function add (show) {
  return Shows().insert(show, 'id')
}

function update (showId, updates) {
  return Shows().where('id', ~~showId).update(updates)
}

function deleteShow (showId) {
  return Shows().where('id', ~~showId).del()
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteShow: deleteShow
}
