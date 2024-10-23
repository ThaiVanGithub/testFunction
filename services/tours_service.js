const db = require('../db');

module.exports.getAllTours = async () => {
    const [record] = await db.query("SELECT * FROM tour")
    return record;
}

module.exports.getToursByID = async (id) => {
    const [record] = await db.query("SELECT * FROM tour where TourId = ?", +[id])
    return record;
}