import * as Yup from "yup";
import Users from "../models/Users";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: "Falha na validação" });
    }

    const userExist = await Users.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(400).json({ error: "Usuário já cadastrado." });
    }

    const { id, name, email, provider } = await Users.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async list(_, res) {
    const users = await Users.findAll();
    return res.json(users);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when("oldPassword", (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: "Falha na validação" });
    }
    const { email, oldPassword } = req.body;

    const user = await Users.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExist = await Users.findOne({ where: email });
      if (userExist) {
        return res.status(400).json({ message: "Email já cadastrado." });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ message: "Senha não confere." });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      provider,
    });
  }
}

export default new UserController();
