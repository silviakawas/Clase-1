const CelsiusToFahrenheit = ({celsius}) =>{

    return(
        <p>
            {celsius} grados celsius son {(celsius * 1.8) + 32} grados fahrenheit
        </p>
    )

};

export default CelsiusToFahrenheit;