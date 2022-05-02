import React from "react"
import "../ComponentsStyles/screenerTemplate.css"
import "./Stock"
import Stock from "./Stock";
import Waiting from "./Waiting"

export default function ScreenerTemplate(){

    const [filters, setFilters] = React.useState({
        allHigh:"",
        weeksHigh:"",
        weeksMin:"",
        movingAverage:"",
        pastEarningsSurprise:"",
        pastEarningsIncrease:""
    })

    const [filteredStocks, setFilteredStocks] = React.useState([])
    const [waiting, setWaiting] = React.useState(false)

    const stocks = filteredStocks.map(stock =>{
        return (
            <Stock
                key={stock}
                stock={stock}
            />
        )
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFilters(prevFilters => {
            return {
                ...prevFilters,
                [name]: value
            }
        })
    }
    function True(){
        setWaiting(true)
    }
    function handleSubmit(e){
        e.preventDefault()
        True()
        const request = new Request("http://localhost:5000/screener",{
            method: 'POST',
            body: JSON.stringify(filters),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
            .then(res => res.json())
            .then(data => setFilteredStocks(data))
            .then(setWaiting(false))

    }

    return(
        <div className="template">
            <h1>Screener Template</h1>

            <div className="filters">

                <label className="all-high-label">Distance to all time high</label>

                <select
                    className="all-high"
                    name="allHigh"
                    value={filters.allHigh}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="5">5% below</option>
                    <option value="10">10% below</option>
                    <option value="15">15% below</option>
                    <option value="20">20% below</option>
                </select>

                <label className="weeks-high-label">Distance to 52 weeks high</label>
                <select
                    className="weeks-high"
                    name="weeksHigh"
                    value={filters.weeksHigh}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="5">5% below</option>
                    <option value="10">10% below</option>
                    <option value="15">15% below</option>
                    <option value="20">20% below</option>
                </select>

                <label className="weeks-min-label">Distance to 52 weeks minimum</label>
                <select
                    className="weeks-min"
                    name="weeksMin"
                    value={filters.weeksMin}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="5">5% over</option>
                    <option value="10">10% over</option>
                    <option value="15">15% over</option>
                    <option value="20">20% over</option>
                </select>


                <label className="moving-average-label">Price over simple moving average</label>
                <select
                    className="moving-average"
                    name="movingAverage"
                    value={filters.movingAverage}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="20">20 days</option>
                    <option value="50">50 days</option>
                    <option value="150">150 days</option>
                    <option value="200">200 days</option>
                </select>

                <label className="past-earnings-surprise-label">Earnings surprise four previous quarters</label>
                <select
                    className="past-earnings-surprise"
                    name="pastEarningsSurprise"
                    value={filters.pastEarningsSurprise}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="5">5% over</option>
                    <option value="10">10% over</option>
                    <option value="10">15% over</option>
                    <option value="20">20% over</option>
                </select>

                <label className="past-earnings-increase-label">Past four quarters earnings increase</label>
                <select
                    className="past-earnings-increase"
                    name="pastEarningsIncrease"
                    value={filters.pastEarningsIncrease}
                    onChange={handleChange}>
                    <option value="">--Choose--</option>
                    <option value="5">5% over</option>
                    <option value="10">10% over</option>
                    <option value="15">15% over</option>
                    <option value="20">20% over</option>
                </select>

                <button className="filter-btn" onClick={handleSubmit}>Filter the stocks</button>
            </div>
            {waiting && <Waiting />}
            {stocks}
        </div>
    )
}