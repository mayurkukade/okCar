import Car from "../Card/CarCard.jsx";
import cars from "../../json/carData.js";
import { CommonUtilities } from "../../util/common.utilities.js";
const CarListCard = () => {
  return (
    <div className="col-md-9 col-sm-7">
      <ul className="searchList">
        {cars.map((e) => {
          return (
            <Car
              key={CommonUtilities.randomString(50)}
              imageSrc={e.imageSrc}
              model={e.model}
              price={e.price}
              year={e.year}
              kilometersDriven={e.kilometersDriven}
              location={e.location}
              fuelType={e.fuelType}
              cc={e.cc}
              transmission={e.transmission}
              lastUpdated={e.lastUpdated}
            />
          );
        })}
      </ul>

      <div className="pagiWrap">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="showreslt">Showing 1-10</div>
          </div>
          <div className="col-md-8 col-sm-8 text-right">
            <ul className="pagination">
              <li className="active">
                <a href="#.">1</a>
              </li>
              <li>
                <a href="#.">2</a>
              </li>
              <li>
                <a href="#.">3</a>
              </li>
              <li>
                <a href="#.">4</a>
              </li>
              <li>
                <a href="#.">5</a>
              </li>
              <li>
                <a href="#.">6</a>
              </li>
              <li>
                <a href="#.">7</a>
              </li>
              <li>
                <a href="#.">8</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListCard;
