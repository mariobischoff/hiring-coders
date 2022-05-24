type User = {
  name: string;
  lastName: string;
  age?: number;
  birthday: string;
};

const mario: User = {
  name: "mario",
  lastName: "bischoff",
  // age: 29,
  birthday: "12/05/1993",
};

// union type
// | (como se fosse o ||)

type LogLevel = "info" | "error" | "debug";

function logMessage(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`);
}

logMessage("Uma mensagem info", "info");

// intersection types: &
type About = {
  bio: string;
  interests: string[];
};

type Profile = User & About;

const userWithProfile: Profile = {
  name: "mario",
  lastName: "bischoff",
  birthday: "12/05/1993",
  bio: "Olá, meu nome é Mario",
  interests: ["nodejs", "react"],
};

type ComposeProfile = User & {
  log: LogLevel;
};
