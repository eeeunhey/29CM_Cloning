const ProductCard = ({ productList }) => {
    return (
        <div>
            <div></div>


            <div className="flex flex-wrap justify-center items-center gap-8 p-10">

                {productList.map((product, i) => (
                    <div key={i} className="w-80 text-center">
                        <img
                            key={i}
                            className=" w-80 h-80 "
                            src={product?.img} />

                        <div>
                            <h3> {product?.title}</h3>
                            <p>{product?.price} </p>
                            <p>{product?.new}</p>
                        </div >
                    </div>

                ))}


            </div>
        </div>
    )
}

export default ProductCard
