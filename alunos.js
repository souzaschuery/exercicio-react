const fs = require("fs");
const alunos = [
  { nome: "Junior", matricula: 12345, media: 7 },
  { nome: "Maria", matricula: 13579, media: 8 },
  { nome: "Ricardo", matricula: 24681, media: 5.5 },
  { nome: "Sonia", matricula: 12121, media: 4.9 },
  { nome: "Regina", matricula: 56565, media: 4 },
];

function acharNome(nomeRequisitado) {
  return alunos.filter((aluno) => aluno.nome === nomeRequisitado);
}

function filtrarMedia(mediaRequerida) {
  return alunos.filter((aluno) => aluno.media >= mediaRequerida);
}

function adicionarAluno(nome, matricula, media, alunos) {
  if (nome !== undefined && matricula !== undefined && media !== undefined) {
    alunos.push({ nome: nome, matricula: matricula, media: media });
    var jsonData = JSON.stringify(alunos);
    fs.writeFileSync("db.json", jsonData);
    return { message: `Aluno adicionado`, alunos };
  } else {
    return { message: "Favor verificar dados" };
  }
}
function deletarAluno(index, alunos) {
  const alunoEncontrado = alunos[index];
  if (alunoEncontrado !== undefined) {
    alunos.splice(index, 1);
    var jsonData = JSON.stringify(alunos);
    fs.writeFileSync("db.json", jsonData);
    return { message: `Aluno excluído com sucesso`, alunos };
  } else {
    return { message: "Aluno não localizado" };
  }
}

function atualizarAluno(index, dados, alunos) {
  const alunoEncontrado = alunos[index];
  if (alunoEncontrado !== undefined) {
    const { nome, media } = dados;
    if (nome !== undefined && media !== undefined) {
      alunoEncontrado.nome = nome;
      alunoEncontrado.media = media;
      var jsonData = JSON.stringify(alunos);
      fs.writeFileSync("db.json", jsonData);
      return { message: `Alterações registradas com sucesso`, alunos };
    } else {
      throw new Error(`Dados inválidos`);
    }
  } else {
    throw new Error(`Aluno não encontrado`);
  }
}

module.exports = {
  alunos,
  acharNome,
  filtrarMedia,
  adicionarAluno,
  deletarAluno,
  atualizarAluno,
};
