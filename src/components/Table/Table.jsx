import React from "react";
import TableHeader from "./TableHeader.jsx";
import CharacterDetails from "./CharacterDetails.jsx";
import uuid from "react-uuid";
import Loader from "../shared/Loader.jsx";
import { useState } from "react";
import { getPlanetData } from "../../services/swapi.js";
import ModalWindow from "../shared/ModalWindow.jsx";
import PlanetInfo from "../PlanetInfo/PlanetInfo.jsx";

const Table = ({
  people,
  isLoading,
  sortByDate,
  sortByString,
  sortByNumber,
}) => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [modalData, setModalData] = useState({});
  const [diameter, setDiameter] = useState("");
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [climate, setClimate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(() => !isModalOpen);
  };

  const fetchPlanetData = async (url) => {
    try {
      setIsDataLoading(true);
      const results = await getPlanetData(url);
      const { climate, population, name, diameter } = results.data;
      setName(() => name);
      setDiameter(() => diameter);
      setPopulation(() => population);
      setClimate(() => climate);
      //   const planetData = results.data;
      //   return planetData
      //   setModalData(planetData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDataLoading(false);
    }
  };

  const openModal = async (url) => {
    toggleModal();
    fetchPlanetData(url).then((data) => setModalData(data));
  };

  return (
    <div className="table">
      <ul className="table-body">
        <TableHeader
          sortByDate={sortByDate}
          sortByString={sortByString}
          sortByNumber={sortByNumber}
        />
        {people &&
          people.map((one) => (
            <li key={uuid()}>
              <CharacterDetails {...one} openModal={openModal} />
            </li>
          ))}
        {isLoading && <Loader />}
      </ul>
      {isModalOpen && (
        <ModalWindow isDataLoading={isDataLoading} onClose={toggleModal}>
          <PlanetInfo
            name={name}
            diameter={diameter}
            population={population}
            climate={climate}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default Table;
