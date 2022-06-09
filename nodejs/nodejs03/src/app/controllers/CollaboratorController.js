import Users from "../models/Users";
import Files from "../models/Files";

class CollaboratorController {
  async index(req, res) {
    const collaborator = await Users.findAll({
      where: { provider: true },
      attributes: ["id", "name", "email"],
      include: [
        {
          model: Files,
          as: "photo",
          attributes: ["name", "path", "url"],
        },
      ],
    });
    return res.json(collaborator);
  }
}

export default new CollaboratorController();
