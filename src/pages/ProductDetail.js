import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hyejin192/hm_react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json(); // json형식으로 바꿈
    // async와 await fetch()는 짝지
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []); // 의존성 배열이 비어있다면 컴퍼넌트가 실행될 때 한 번만 함수가 실행된다

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 d-flex justify-content-end">
          <img src={product?.img} />
        </div>
        <div className="col-6 ps-5 pt-3 d-flex flex-column gap-2">
          <div className="fw-bolder">{product?.title}</div>
          <div className="text-decoration-underline">{product?.price}</div>
          <div>{product?.choice ? "Conscious choice" : ""}</div>
          <select class="form-select mt-3" aria-label="Default select example">
            <option selected>Size</option>
            {product?.size.length > 0 &&
              product?.size.map((item) => {
                return <option value={item}>{item}</option>;
              })}
          </select>
          <button className="btn btn-secondary mt-3">추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
