import { useParams } from "react-router-dom";

const VanDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>van details goes here</h1>
    </>
  );
};

export default VanDetails;
