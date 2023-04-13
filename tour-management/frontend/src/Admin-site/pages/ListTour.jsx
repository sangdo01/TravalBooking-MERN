import React from "react";
import "../styles/listtour.css";
const ListTour = () => {
  return (
    <div className="sell__car content">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Cars</h2>


        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Offers</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">Bmw</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">1</h3>
                <h6 className="avg__price">
                  <i class="ri-map-pin-2-line"></i>2
                </h6>

                <h6 className="market__price">Market average is $16,244</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="box__02">
                <span className="model__spend-icon">
                  <i class="ri-group-line"></i>
                </span>
                <h6 className="spend__amount">13</h6>
                <p className="spend__title">Total Person</p>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">3</h6>
                <p className="spend__title">Price</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$998</h6>
                <p className="spend__title">Toltal Price</p>

              </div>
              <div className="box__05">
                <div className="edit__btn">
                  <span className="dlt__btn">
                    <button className="dlt__btn"><i class="ri-pencil-line"></i>Edit</button>
                  </span>
                </div>
                <div className="edit__btn">

                  <span className="update__btn">
                    <button className="dlt__btn"><i class="ri-delete-back-2-line"></i>Delete</button>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTour;
