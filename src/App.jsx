import React, { useState } from 'react'
import Topbar from './component/Topbar'
import Header from './component/Header'
import Card from './component/Card'

function App() {
  let data = [
    {
      name: "Sale Item",
      options: "Add",
      image: "https://m.media-amazon.com/images/I/619AvISJtaL._SY741_.jpg",
      isSale: true,
      rating: false,
    },
    {
      name: "Fancy Product",
      options: "View",
      image: "https://m.media-amazon.com/images/I/71UVfLcPEML._SX679_.jpg",
      isSale: false,
      rating: false,
    },
    {
      name: "Special Item",
      options: "Add",
      image: "https://rukminim2.flixcart.com/image/832/832/ktketu80/sweatshirt/b/3/a/m-67029201-puma-original-imag6wygzhubhpzp.jpeg?q=70",
      isSale: true,
      rating: true,
    },
    {
      name: "Popular Item",
      options: "Add",
      image: "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/solid_brown_men_sweatshirts_base_07_11_2023_700x933.jpg",
      isSale: false,
      rating: true,
    },
    {
      name: "Sale Item",
      options: "Add",
      image: "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/navy_blue_sulphur_twill_shirt_for_men_base_18_11_2023_700x933.jpg",
      isSale: true,
      rating: false,
    },
    {
      name: "Popular Item",
      options: "Add",
      image: "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/sand_brown_solid_urban_shirt_for_men_base_15_11_2023_400x533.jpg",
      isSale: false,
      rating: true,
    },
    {
      name: "Fancy Product",
      options: "View",
      image: "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/dusky_green_mock_neck_full_sleeves_t_shirt_base_03_11_2023_700x933.jpg",
      isSale: false,
      rating: false,
    },
    {
      name: "Special Item",
      options: "Add",
      image: "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/ash_grey_oversized_full_sleeves_t-shirt_for_men_base_14_12_2023_700x933.jpg",
      isSale: true,
      rating: true,
    },
  ];
  let [cartCount, setCount] = useState(0); //0 is initial value

  return (
    <>
      <Topbar cartCount={cartCount} setCount={setCount} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e, i) => {
                return <Card data={e} key={i} cartCount={cartCount} setCount={setCount} />;
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App
