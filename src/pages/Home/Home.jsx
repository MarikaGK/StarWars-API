import React, { useCallback, useEffect, useState } from "react";
import { getPeopleData, getPlanetsNames } from "../../services/swapi";
import Table from "../../components/Table/Table.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import { noRepeatsArray } from "../../utils/noRepeatsArray.js";
import { formatDateToCompare } from "../../utils/formatDate.js";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [peopleFetchUrl, setPeopleFetchUrl] = useState(
    "https://swapi.dev/api/people/"
  );
  const [planetsFetchUrl, setPlanetsFetchUrl] = useState(
    "https://swapi.dev/api/planets/"
  );
  const [input, setInput] = useState("");
  const [isPeopleLoading, setIsPeopleLoading] = useState(false);
  const [planetsNames, setPlanetsNames] = useState([]);
  const [sortedPeople, setSortedPeople] = useState([]);

  const fetchAndUpdatePlanets = useCallback(async () => {
    try {
      if (planetsFetchUrl) {
        const data = await getPlanetsNames(planetsFetchUrl);
        setPlanetsFetchUrl(data.next);
        const fetchedPlanetsNames = data.planetsNames;
        const currentPlanets = noRepeatsArray(
          planetsNames,
          fetchedPlanetsNames
        );
        setPlanetsNames(() => currentPlanets);
      }
    } catch (err) {
      console.error(err);
    }
  }, [planetsFetchUrl]);

  useEffect(() => {
    fetchAndUpdatePlanets();
  }, [planetsFetchUrl]);

  const fetchAndUpdatePeople = useCallback(async () => {
    try {
      setIsPeopleLoading(true);
      if (peopleFetchUrl) {
        const data = await getPeopleData(peopleFetchUrl);
        setPeopleFetchUrl(data.next);
        const currentPeople = noRepeatsArray(people, data.people);
        const peopleUpdatedWithPlanetName =
          updatePeopleByPlanetName(currentPeople);
        setPeople(() => peopleUpdatedWithPlanetName);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPeopleLoading(false);
    }
  }, [peopleFetchUrl]);

  useEffect(() => {
    fetchAndUpdatePeople();
  }, [peopleFetchUrl]);

  const updatePeopleByPlanetName = (people) => {
    return people.map((character) => ({
      ...character,
      planet: planetsNames[character.planetNo - 1],
    }));
  };

  const handleFilterChange = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    setInput(() => value);
  };

  const getVisibleRecords = (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    const visibleRecords = getVisibleRecords(people, input);
    setSortedPeople(() => visibleRecords);
  }, [people, input]);

  const sortedByDate = (ev) => {
    ev.preventDefault();
    const { name } = ev.target;
    const sortedPeopleByDate =
      sortedPeople.length > 0
        ? [...sortedPeople].sort((a, b) =>
            formatDateToCompare(b[name]).localeCompare(
              formatDateToCompare(a[name])
            )
          )
        : [];
    setSortedPeople(() => sortedPeopleByDate);
  };

  const sortedByString = (ev) => {
    ev.preventDefault();
    const { name } = ev.target;
    const sortedPeopleByString =
      sortedPeople.length > 0
        ? [...sortedPeople].sort((a, b) => a[name].localeCompare(b[name]))
        : [];
    setSortedPeople(() => sortedPeopleByString);
  };

  const sortedByNumber = (ev) => {
    ev.preventDefault();
    const { name } = ev.target;
    const sortedPeopleByKey =
      sortedPeople.length > 0
        ? [...sortedPeople]
            .sort((a, b) => a[name].localeCompare(b[name]))
            .sort((a, b) => Number(a[name]) - Number(b[name]))
        : [];
    setSortedPeople(() => sortedPeopleByKey);
  };

  return (
    <div className="container">
      <Filter input={input} onChange={handleFilterChange} />
      <Table
        people={sortedPeople}
        isLoading={isPeopleLoading}
        sortByDate={sortedByDate}
        planets={planetsNames}
        sortByString={sortedByString}
        sortByNumber={sortedByNumber}
      />
    </div>
  );
};

export default Home;
