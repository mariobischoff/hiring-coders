import express, {Application, Request, Response} from "express";

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
  res.send({"msg":"ok"})
})

app.listen(3000, () => console.log("server on!"))
