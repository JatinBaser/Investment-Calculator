import logo from "../assets/investment-calculator-logo.png";

export default function Header(){
    return<header id = "header">
        <img src={logo} alt="bag showing money" />
        <h1>Investment Convertor</h1>
    </header>
}