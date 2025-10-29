import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail =() => {
        navigate(`/products/${item.id}`)
    }
  return (
    <div className="" onClick={showDetail}>
      <div className="img-wrap">
        <img src={item?.img}  />
      </div>

      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
