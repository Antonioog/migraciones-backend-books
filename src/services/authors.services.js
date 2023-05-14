const db = require('./../database/models/index');

class AuthorsServices {
  async findAll() {
    const authors = await db.Authors.findAll({
      where: {
        status: true,
      },
    });
    return authors;
  }
}

module.exports = AuthorsServices;
