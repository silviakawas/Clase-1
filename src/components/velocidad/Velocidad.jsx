const Velocidad = ({number}) =>{

    return(
        <p>
            {number} km/h son {((number * 1000)/1)/3600} m/s
        </p>
    )

};

export default Velocidad;