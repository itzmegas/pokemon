import { getFirstPokemons } from "../service/pokemons";

const NewTrainer = ({ data }) => {
  console.log(data);
};

export const getServerSideProps = async () => {
  const data = getFirstPokemons();
  return { props: { data } };
};

export default NewTrainer;
