// axios
import axios from "axios";
import React, { useEffect, useState } from "react";

// icons
import { BiTrashAlt, BiEdit, BiShowAlt } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pagination
import ReactPaginate from "react-paginate";

// router dom
import { Link } from "react-router-dom";

function Clientes() {
  // loading state
  const [itens, setItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    carregarItens();
  }, [currentPage]);

  // loader data
  const carregarItens = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get("http://localhost:8080/");
      const totalItems = response.data.length;
      const offset = currentPage * itemsPerPage;
      const itemsToDisplay = response.data.slice(offset, offset + itemsPerPage);
      setItens(itemsToDisplay);

      const pageCount = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(pageCount);
    } catch (error) {
      console.error("Erro ao carregar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // delete
  const excluirItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/${itemId}`);
      toast.success("Item excluído com sucesso!");
      carregarItens();
    } catch (error) {
      console.error("Erro ao excluir o item:", error);
      toast.error("Erro ao excluir o item");
    }
  };

  return (
    <div className="container h-full mx-auto max-w-full sm:px-2 px-8">
      <div className="flex justify-end">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded text-xs m-10 ">
          <Link to="/../Creater"> Adicionar</Link>
        </button>
      </div>
      {isLoading ? ( // Renderiza o efeito de loading se isLoading for verdadeiro
        <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
          <div class="relative inline-flex">
            <div class="w-10 h-10 bg-violet-800 rounded-full"></div>
            <div class="w-10 h-10 bg-violet-800 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div class="w-10 h-10 bg-violet-800 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className=" min-w-full text-xs">
            <thead className="rounded-t-lg bg-neutral-100	border-b-2 border-neutral-300 ">
              <tr className="text-right">
                <th className="p-3 text-left ">STATUS</th>
                <th className="p-3 text-left ">ID</th>
                <th className="p-3 text-left">RAZÃO SOCIAL</th>
                <th className="p-3 text-left">CIDADE</th>
                <th className="p-3 text-left">UF</th>
                <th className="p-3 text-left">TELEFONE</th>
                <th className="p-3 text-left">RESPONSÁVEL</th>
                <th className="p-3 text-left">COBRANÇA</th>
                <th className="p-3 text-left">VALOR</th>
                <th className="p-3 text-left">INF CONTA</th>
                <th className="p-3 text-left ">TIPO DE CONTA</th>
                <th className="p-3 text-left ">AGENCIA</th>
                <th className="p-3 text-left ">CONTA</th>
                <th className="p-3 text-left ">CÓDIGO</th>
                <th className="p-3 text-left ">DT REGISTRO</th>
                <th className="p-3 text-right ">#</th>
              </tr>
            </thead>
            <tbody>
              {/* buscar dados */}
              {itens.map((db) => (
                <tr className="text-right border-b border-opacity-20">
                  <td className="p-3 text-left ">
                    <span class="float-right rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-emerald-100	 antialiased">
                      Ativo
                    </span>
                  </td>
                  <td className="px-3 py-2 text-left">{db.id}</td>
                  <td className="px-3 py-2 text-left">{db.Razão_Social}</td>
                  <td className="px-3 py-2 text-left">{db.Cidade}</td>
                  <td className="px-3 py-2 text-left">{db.UF}</td>
                  <td className="px-3 py-2 text-left">{db.TELEFONE}</td>
                  <td className="px-3 py-2 text-left">{db.RESPONSÁVEL}</td>
                  <td className="px-3 py-2 text-left">{db.COBRA}</td>
                  <td className="px-3 py-2 text-left">{db.VALOR}</td>
                  <td className="px-3 py-2 text-left">{db.INF_CONTA}</td>
                  <td className="px-3 py-2 text-left">{db.TIPO_DE_CONTA}</td>
                  <td className="px-3 py-2 text-left">{db.AGENCIA}</td>
                  <td className="px-3 py-2 text-left">{db.CONTA}</td>
                  <td className="px-3 py-2 text-left">{db.data_hora}</td>
                  <td className="px-3 py-2 text-left">{db.CÓDIGO}</td>

                  <td className="px-5 py-2 text-left ">
                    {/* visualizar */}
                    <td width={30}>
                      <BiShowAlt onClick={() => excluirItem(db.id)} />
                    </td>

                    {/* editar */}
                    <td width={30}>
                      <BiEdit onClick={() => excluirItem(db.id)} />
                    </td>

                    {/* excluir */}
                    <td width={30}>
                      <BiTrashAlt onClick={() => excluirItem(db.id)} />
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* plugin toast */}
      <ToastContainer />
      <div className="flex justify-center font-medium mt-5">
        {/* plugin Reactpagination */}
        <ReactPaginate
          previousLabel={<BsArrowLeft />}
          nextLabel={<BsArrowRight />}
          breakLabel={" ... "}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={4}
          pageRangeDisplayed={4}
          onPageChange={handlePageChange}
          containerClassName={
            "inline-flex items-center text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700"
          }
          subContainerClassName={"pages pagination "}
          activeClassName={"active bg-indigo-500 text-gray-100 "} //mostra qual pagina está ativa
          nextClassName={"p-2"}
          disabledClassName={"opacity-50  "}
          pageClassName={"border p-2"}
          pageLinkClassName={" text-bold "} //classes tailwind
        />
      </div>
    </div>
  );
}

export default Clientes;
