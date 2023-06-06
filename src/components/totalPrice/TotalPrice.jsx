const TotalPrice = ({number}) =>{

    return(
        <p>
            El precio con IVA es de {number + (number* 0.21) }
        </p>
    );

};

export default TotalPrice;