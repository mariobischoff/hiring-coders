let gatos: string[] = ["lora", "logan"];

gatos.push("lemão");

function exibeGatos(gatos: string[]) {
  return `Os gatos são: ${gatos.join(" ")}`;
}

console.log(exibeGatos(gatos));
