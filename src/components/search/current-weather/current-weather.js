import "./current-weather.css"
import styled from "styled-components"

const WeatherContainer = styled.div`
    box-sizing: border-box; 
    width: 380px;
    height: 200px;
    
    border-radius: 6px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    color: black;
    
    background-color: #${props => props.bg};

    margin: 20px auto 0 auto;
    padding: 15px;
`
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Top = styled.div`
    text-align: center;

    margin: 5px 0px;
`

const Left = styled.div`
    flex: 1;
`
const Temperature = styled.p`
    padding: 0px;
    margin: 0px;

    font-size: 40px;
    text-align: center;
`

const Center = styled.div`
    flex: 1;

    text-align: center;
`
const Image = styled.img`
    width: 110px;
`

const Right = styled.div`
    flex: 1;
`
const DetailTitle = styled.div`
    text-align: center;
    margin-bottom: 10px;
`


export const CurrentWeather = ({ data }) => {

    const bg_Color = (weather) => {

        if (weather.includes("sky")) {
            return "87CEEB";
        } else if (weather.includes("cloud")) {
            return "CCCCCC";
        } else if (weather.includes("rain")) {
            return "B0C4DE";
        }
    }

    return (
        <WeatherContainer bg={bg_Color(data.weather[0].description)}>

            <Top>
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </Top>

            <Bottom>

                <Left>
                    <Temperature>{Math.round(data.main.temp)}°C</Temperature>
                </Left>

                <Center>
                    <Image src={`icons/${data.weather[0].icon}.png`} />
                </Center>

                <Right>

                    <DetailTitle>
                        Details
                    </DetailTitle>

                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{data.wind.speed} m/s</span>
                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{data.main.humidity}%</span>
                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{data.main.pressure} hPa</span>
                        </div>
                    </div>
                </Right>
            </Bottom>
        </WeatherContainer>
    );
}
