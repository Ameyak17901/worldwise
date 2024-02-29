/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./Cityitem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// import { useCities } from "../contexts/CitiesContext";

function CityList() {
  // const { cities, isLoading } = useCities();
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities)
    return <Message message="Add your first city from the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
