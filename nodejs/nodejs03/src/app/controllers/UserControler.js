import "../../database";

import Users from "../models/Users";

class UserController {
  async store(req, res) {
    const user = await Users.create(req.body);
    return res.json(user);
  }
  async list(req, res) {
    const users = await Users.findAll();
    return res.json(users);
  }
}

export default new UserController();
