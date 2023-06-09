import React from "react";
import "../styles/listtour.css";

const SellCar = () => {


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
                    <h3 className="client__name">Jhon Doe</h3>
                    <h6 className="avg__price">
                      $11,605 <span>average price</span>
                    </h6>
    
                    <h6 className="market__price">Market average is $11,244</h6>
                    <span className="arrow__key">
                      <i class="ri-arrow-right-line"></i>
                    </span>
                  </div>
    
                  <div className="box__02">
                    <span className="model__spend-icon">
                      <i class="ri-car-line"></i>
                    </span>
                    <h6 className="spend__amount">$1174</h6>
                    <p className="spend__title">Model Spend</p>
                  </div>
    
                  <div className="box__03">
                    <span className="model__spend-icon">
                      <i class="ri-share-forward-line"></i>
                    </span>
                    <h6 className="spend__amount">$1174</h6>
                    <p className="spend__title">Model Spend</p>
                  </div>
    
                  <div className="box__04">
                    <span className="model__spend-icon">
                      <i class="ri-money-dollar-circle-line"></i>
                    </span>
                    <h6 className="spend__amount">$811</h6>
                    <p className="spend__title">Spend Per Unit Turned</p>
    
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

export default SellCar;
