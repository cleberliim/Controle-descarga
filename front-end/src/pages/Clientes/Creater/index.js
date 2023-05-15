// axios
import axios from "axios";
import React, { useEffect, useState } from "react";

// toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// router dom
import { Link } from "react-router-dom";

// icons
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Creater() {
  // creater

  const [cpfcnpj, setCpfcnpj] = useState("");
  const [razao_social, setRazao_Social] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cobra, setCobra] = useState("");
  const [volumeton, setVolumeton] = useState("");
  const [valor, setValor] = useState("");
  const [infconta, setIfconta] = useState("");
  const [tipoconta, setTipoconta] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [codigo, setCodigo] = useState("");
  const [titular, setTitular] = useState("");
  const [horariofunc, setHorariofunc] = useState("");
  const [agendamento, setAgendamento] = useState("");
  const [obs, setObs] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080", {
        cpfcnpj,
        razao_social,
        uf,
        cidade,
        telefone,
        responsavel,
        cobra,
        volumeton,
        valor,
        infconta,
        tipoconta,
        agencia,
        conta,
        codigo,
        titular,
        horariofunc,
        agendamento,
        obs,
      });

      console.log(res);
      toast.success("Item criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar item:", error);
      toast.error("Erro ao criar");
    }
  };

  return (
    <div className="container h-full mx-auto md:w-auto mt-10 px-20 text-xs">
      <button className=" text-indigo-500		text-2xl	 font-bold py-2 px-4 rounded float-right">
        <Link to="/Clientes">
          <BsArrowLeftCircleFill />
        </Link>
      </button>
      <h1 className="ml-4 text-lg mb-20 font-bold text-gray-400">
        Adicionar dados
      </h1>

      <form onSubmit={handleSubmit} className="  mx-auto w-full my-8">
        <div className="flex flex-row">
          <div className="ml-4 flex">
            <label
              className="  block mb-2 font-bold text-gray-700"
              htmlFor="razao_social"
            >
              RAZÃO SOCIAL:
              <input
                className="w-60 px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={razao_social}
                onChange={(e) => setRazao_Social(e.target.value)}
              />
            </label>
          </div>
          <div className=" flex">
            <label
              className="block mb-2 font-bold text-gray-700 flex-1"
              htmlFor="cpfcnpj"
            >
              CPF/CNPJ:
              <input
                className="w-60 px-3 py-2 text-gray-700 bg-gray-100 rounded flex-2"
                type="text"
                value={cpfcnpj}
                onChange={(e) => setCpfcnpj(e.target.value)}
              />
            </label>
          </div>
          <div className="flex">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="cidade"
            >
              CIDADE:
              <input
                className="w-60 px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </label>
          </div>
          <div className="flex">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="uf">
              UF:
              <input
                className="w-20 px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              />
            </label>
          </div>
          <div className="flex">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="responsavel"
            >
              RESPONSÁVEL:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </label>
          </div>
          <div className="ml-4 flex">
            <label
              className="block mb-2 font-bold text-gray-700"
              htmlFor="cobra"
            >
              COBRANÇA:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={cobra}
                onChange={(e) => setCobra(e.target.value)}
              />
            </label>
          </div>
        </div>

        {/* segunda parte */}
        <div className="flex flex-row mt-8">
          <div className="ml-4 flex">
            <label
              className="block mb-2 font-bold text-gray-700 flex-1"
              htmlFor="volumeton"
            >
              VOLUME TONELADA:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={volumeton}
                onChange={(e) => setVolumeton(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              VALOR:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              INFORMAÇÃO CONTA:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={infconta}
                onChange={(e) => setIfconta(e.target.value)}
              />
            </label>
          </div>
          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              TIPO CONTA:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={tipoconta}
                onChange={(e) => setTipoconta(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              AGENCIA:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={agencia}
                onChange={(e) => setAgencia(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              CONTA:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={conta}
                onChange={(e) => setConta(e.target.value)}
              />
            </label>
          </div>
        </div>

        {/* terceiro parte */}
        <div className="flex flex-row mt-8">
          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              CODIGO:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </label>
          </div>
          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              TITULAR:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={titular}
                onChange={(e) => setTitular(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              HORARIO FUNCIONAMENTO:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={horariofunc}
                onChange={(e) => setHorariofunc(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-4 flex">
            <label className="block mb-2 font-bold text-gray-700 flex-1">
              AGENDAMENTO:
              <input
                className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded"
                type="text"
                value={agendamento}
                onChange={(e) => setAgendamento(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="ml-4 flex">
          <label className="block mb-2 font-bold text-gray-700 flex-1">
            OBS:
            <input
              className="w-full px-3 py-2 text-gray-700 h-20	 bg-gray-100 rounded"
              type="text"
              value={obs}
              onChange={(e) => setObs(e.target.value)}
            />
          </label>
        </div>
        <button
          className="ml-4 bg-indigo-500	 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
          type="submit"
        >
          Adiconar
        </button>
      </form>
      {/* plugin toast */}
      <ToastContainer />
    </div>
  );
}

export default Creater;
