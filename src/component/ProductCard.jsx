const ProductCard = ({ productList }) => {
    return (
        <div>
            <div></div>
         

            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
                {productList.map((product, i) => (
                    <>
                        <img
                            key={i}
                            className=" w-80 h-80 "
                            src={product?.img} />

      
                    </>

                ))}
            </div>
        </div>
    )
}

export default ProductCard
