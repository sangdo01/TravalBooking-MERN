import React from "react";
import "../styles/bookingslist.css";
import "../styles/listtour.css";
import TrackingChart from "../charts/TrackingChart";

const Bookings = () => {
  return (

  <div className="sell__car content">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Cars</h2>
        <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Offers</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Mien Bac</option>
                <option value="bmw">Mien Nam</option>
                <option value="audi">Mien trung</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h5 className="client__name">Westminister Bridge</h5>
                <h6 className="avg__price">
                  <i class="ri-map-pin-2-line"></i>London
                </h6>

                <h6 className="market__price"><i class="ri-map-pin-time-line"></i>300 k/m</h6>
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
                </span>
                <h6 className="spend__amount">$22</h6>
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
                    <button className="dlt__btn"><i class="ri-check-line"></i>Accept</button>
                  </span>
                </div>
                <div className="edit__btn">

                  <span className="update__btn">
                    <button className="dlt__btn"><i class="ri-close-circle-line"></i>Refuse</button>
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

export default Bookings;
