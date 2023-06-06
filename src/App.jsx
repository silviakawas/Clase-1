import Button from './components/button/Button';
import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import TresNumeros from './components/tresNumeros/TresNumeros';
import Velocidad from './components/velocidad/Velocidad';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
	return (
		<>
			<Button name='Javi' age={25} />
			<CalculateSquareArea number= {7} />
			<SayHello name='Pepa'/>
			<CalculateTriangleArea base={2} altura={4}/>
			<CalculateCircleArea radio={3}/>
			<CelsiusToFahrenheit celsius={28}/>
			<FahrenheitToCelsius fahrenheit={75}/>
			<TotalPrice number={23}/>
			<WriteMessage name='Silvia' material='papel' size='20 x 40' note='Pon un mensaje bonito'/>
			<TresNumeros numberA={12} numberB={4} numberC={23}/>
			<Velocidad number={23}/>
		</>
	) 
};

export default App;
