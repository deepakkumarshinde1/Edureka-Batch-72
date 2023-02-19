import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "./base_url";

const Restaurant = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // {id:1}
  let [toggle, setToggle] = useState(true);
  let [totalPrice, setTotalPrice] = useState(0);
  let initRestaurant = {
    _id: 0,
    name: "",
    city: "",
    location_id: 0,
    city_id: 0,
    locality: "",
    thumb: [],
    aggregate_rating: 0,
    rating_text: "",
    min_price: 0,
    contact_number: "",
    cuisine_id: [],
    cuisine: [],
    image: "",
    mealtype_id: 0,
  };
  let [restaurantDetails, setRestaurantDetails] = useState({
    ...initRestaurant,
  });
  let [restaurantMenu, setRestaurantMenu] = useState([]);
  let getRestaurantDetails = async () => {
    // get data of single restaurant
    let url = `${BASE_URL}get-restaurant-details-by-id/${id}`;
    let { data } = await axios.get(url);
    if (data.status === true) {
      setRestaurantDetails({ ...data.result });
    } else {
      setRestaurantDetails({ ...initRestaurant });
    }
  };
  let manageIncQty = (index) => {
    let _restaurantMenu = [...restaurantMenu];
    _restaurantMenu[index].qty += 1;
    let newTotal = totalPrice + _restaurantMenu[index].price;
    setTotalPrice(newTotal);
    setRestaurantMenu(_restaurantMenu);
  };

  let manageDecQty = (index) => {
    let _restaurantMenu = [...restaurantMenu];
    _restaurantMenu[index].qty -= 1;
    let newTotal = totalPrice - _restaurantMenu[index].price;
    setTotalPrice(newTotal);
    setRestaurantMenu(_restaurantMenu);
  };

  let getMenuItemsList = async () => {
    let url = `${BASE_URL}get-menu-items-by-restaurant-id/${id}`;
    let { data } = await axios.get(url);
    console.log(data);
    if (data.status === true) {
      setRestaurantMenu([...data.result]);
    } else {
      setRestaurantMenu([]);
    }
  };

  useEffect(() => {
    getRestaurantDetails();
    getMenuItemsList();
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="restMenuModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {restaurantDetails.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {restaurantMenu.map((menuItem, index) => {
                return (
                  <div className="row p-2">
                    <div className="col-8">
                      <p className="mb-1 h6">{menuItem.name}</p>
                      <p className="mb-1"> ₹ {menuItem.price} Only</p>
                      <p className="small text-muted">{menuItem.description}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <div className="menu-food-item">
                        <img src={"/images/" + menuItem.image} alt="" />

                        {menuItem.qty <= 0 ? (
                          <button
                            onClick={() => manageIncQty(index)}
                            className="btn btn-primary btn-sm add"
                          >
                            Add
                          </button>
                        ) : (
                          <div className="order-item-count section ">
                            <span
                              className="hand"
                              onClick={() => manageDecQty(index)}
                            >
                              -
                            </span>
                            <span>{menuItem.qty}</span>
                            <span
                              className="hand"
                              onClick={() => manageIncQty(index)}
                            >
                              +
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <hr className=" p-0 my-2" />
                  </div>
                );
              })}
            </div>
            <div className="modal-footer d-flex justify-content-between p-3 pt-0">
              <h3>Total: {totalPrice}</h3>
              {totalPrice > 0 ? (
                <button className="btn btn-success">Process</button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <main className="container-fluid">
        <div className="row bg-danger justify-content-center">
          <div className="col-10 d-flex justify-content-between py-2">
            <p className="m-0 brand" onClick={() => navigate("/")}>
              e!
            </p>
            <div>
              <button className="btn text-white">Login</button>
              <button className="btn btn-outline-light">
                <i className="fa fa-search" aria-hidden="true"></i>Create a
                Account
              </button>
            </div>
          </div>
        </div>

        {/* <!-- section -->  */}
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row">
              <div className="col-12 mt-5">
                <div className="restaurant-main-image position-relative">
                  <img
                    src="/images/retaurent-background.png"
                    alt=""
                    className=""
                  />
                  <button
                    className="btn btn-outline-light position-absolute btn-gallery"
                    data-bs-toggle="modal"
                    data-bs-target="#slideShow"
                  >
                    Click To Get Image Gallery
                  </button>
                </div>
              </div>
              <div className="col-12">
                <h3 className="mt-4">{restaurantDetails.name}</h3>
                <div className="d-flex justify-content-between">
                  <ul className="list-unstyled d-flex gap-3">
                    <li
                      onClick={() => setToggle(true)}
                      className={
                        toggle ? "border-bottom border-5 border-success" : null
                      }
                    >
                      Overview
                    </li>
                    <li
                      onClick={() => setToggle(false)}
                      className={
                        !toggle ? "border-bottom border-5 border-success" : null
                      }
                    >
                      Contact
                    </li>
                  </ul>
                  <button
                    className="btn btn-danger align-self-start"
                    data-bs-toggle="modal"
                    data-bs-target="#restMenuModal"
                    role="button"
                  >
                    Place Online Order
                  </button>
                </div>
                <hr className="mt-0" />

                {toggle ? (
                  <div className="over-view">
                    <p className="h5 mb-4">About this place</p>

                    <p className="mb-0 fw-bold">Cuisine</p>
                    <p>
                      {restaurantDetails.cuisine
                        .map((cuisine_name) => cuisine_name.name)
                        .join(", ")}
                    </p>

                    <p className="mb-0 fw-bold">Average Cost</p>
                    <p>
                      ₹ {restaurantDetails.min_price} for two people (approx.)
                    </p>
                  </div>
                ) : (
                  <div className="over-view">
                    <p className="h5 mb-4">About this place</p>
                    <p className="mb-0 fw-bold">Phone Number</p>
                    <p>+{restaurantDetails.contact_number}</p>

                    <p className="mb-0 fw-bold">Address</p>
                    <p>
                      {restaurantDetails.locality}, {restaurantDetails.city}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Restaurant;
