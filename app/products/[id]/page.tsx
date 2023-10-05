type ProductDetailsProps = {
  params: { id: string }
}

const ProductDetails = ({ params: {id} }: ProductDetailsProps) => {
  return (
    <div>
      {id}
    </div>
  )
};

export default ProductDetails;
