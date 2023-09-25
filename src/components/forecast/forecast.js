import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import "./forecast.css";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <div className="slider-container" style={{ margin: "20px" }}>
            <label className="title">Daily Forecast</label>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={20}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    520: {
                        slidesPerView: 2,
                    },
                    950: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data.list.splice(0, 7).map((item, idx) => {

                    return (
                        <SwiperSlide key={idx}>
                            <div className="card-container">
                                <div className="card-top">
                                    <label className="day">{forecastDays[idx]}</label>
                                </div>

                                <div className="card-center">
                                    <div className="icon-desc-container">
                                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                        <div className="desc">
                                            <label className="card-temp">{Math.round(item.main.temp)}°C</label>
                                            <label className="description">{item.weather[0].description}</label>
                                        </div>
                                    </div>
                                    <div className="max-min-temp-container">
                                        <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </div>

                                <div className="card-bottom">
                                    <div className="daily-details-grid">
                                        <div className="daily-details-grid-item">
                                            <label>Pressure</label>
                                            <label>{item.main.pressure}hPa</label>
                                        </div>

                                        <div className="daily-details-grid-item">
                                            <label>Humidity</label>
                                            <label>{item.main.humidity}%</label>
                                        </div>

                                        <div className="daily-details-grid-item">
                                            <label>Clouds</label>
                                            <label>{item.clouds.all}%</label>
                                        </div>

                                        <div className="daily-details-grid-item">
                                            <label>Wind Speed:</label>
                                            <label>{item.wind.speed}m/s</label>
                                        </div>

                                        <div className="daily-details-grid-item">
                                            <label>Sea level:</label>
                                            <label>{item.main.sea_level}m</label>
                                        </div>

                                        <div className="daily-details-grid-item">
                                            <label>Feels like:</label>
                                            <label>{Math.round(item.main.feels_like)}°C</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>);
                })}

            </Swiper>
        </div>
    );

}