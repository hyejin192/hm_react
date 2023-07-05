import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productlist, setProductlist] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/hyejin192/hm_react/products?q=${searchQuery}`;

    let responsive = await fetch(url);
    // await 함수는 비동기로 들어간다
    // awati함수를 쓸 때는 async를 짝지로 반드시 같이 써야함
    // 동기는 1번 일이 끝나고 나면 2번 일이 진행되는것 (자바스크립트는 동기적)
    // 비동기는 별도로 빼서 관리를 함 거기서 돌아가게끔
    // 시간이 되면 바로바로 실행되는데 문장이 끝나고 나면 실행되게끔 기다려라는 문을 사용 (await : 기다려라)

    let data = await responsive.json();
    console.log(responsive, data);
    setProductlist(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <div className="container productAll">
        <div className="row">
          {productlist.map((item) => {
            return (
              <div key={item.id} className="col-md-3 col-12">
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
