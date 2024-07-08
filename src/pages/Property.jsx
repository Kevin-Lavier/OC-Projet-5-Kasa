import { useParams } from "react-router-dom";

const Property = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Logement {id}</h1>
    </div>
  );
};

export default Property;
