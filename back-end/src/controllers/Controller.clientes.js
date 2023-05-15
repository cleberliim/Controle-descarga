import { db } from "../database/index.js";

//listar clientes
export const getClientes = (_, res) => {
  const q = "SELECT * FROM clientes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//add clientes
export const addClientes = (req, res) => {
  const q =
    " INSERT INTO clientes(CPFCNPJ_DA_CONTA, Razão_Social, UF, Cidade, TELEFONE, RESPONSÁVEL, COBRA, VOLUMETONELADA, VALOR, INF_CONTA, TIPO_DE_CONTA, AGENCIA, CONTA, CÓDIGO, TITULAR, HORARIO_DE_FUNC, AGENDAMENTO, OBS)  VALUES(?);";

  const values = [
    req.body.cpfcnpj,
    req.body.razao_social,
    req.body.uf,
    req.body.cidade,
    req.body.telefone,
    req.body.responsavel,
    req.body.cobra,
    req.body.volumeton,
    req.body.valor,
    req.body.infconta,
    req.body.tipoconta,
    req.body.agencia,
    req.body.conta,
    req.body.codigo,
    req.body.titular,
    req.body.horariofunc,
    req.body.agendamento,
    req.body.obs,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Criado com sucesso.");
  });
};

//deletar clientes
export const deleteClientes = (req, res) => {
  const q = "DELETE FROM clientes WHERE `id` = ? ";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados excluidos com sucesso");
  });
};
