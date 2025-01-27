import { useEffect, useState } from "react";
import Card from "../Card";
import './CoffeeList.css'; 

function CoffeeList () {
    const [coffeeData, setCoffeeData] = useState([])
    const [allCoffeeData, setAllCoffeeData] = useState([])
    const [activeButton, setActiveButton] = useState('all')

    function onlyAvailableCards() {
        const availableCoffees = coffeeData.filter(coffee => coffee.available)
        setCoffeeData(availableCoffees)
        setActiveButton('available')
    }

    function showAllCoffees() {
        setCoffeeData(allCoffeeData)
        setActiveButton('all')
    }

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
            .then(res => res.json())
            .then(data => {
                setCoffeeData(data)
                setAllCoffeeData(data)
            })
            .catch((error) => {
                console.error('Falha na Req para api', error)
            })
    },[]);

    return(
        <>
            <section className="container">
                <div className="introduction">
                    <h1 className="title">Our Collection</h1>
                    <p className="text">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    <div className="available-buttons">
                        <button 
                            className={ activeButton === "all" ? "active" : "" } 
                            onClick={showAllCoffees} >All Products</button>
                        <button 
                            className={ activeButton === "available" ? "active" : "" }
                            onClick={onlyAvailableCards} >Available Now</button>
                    </div>
                </div>
                <div className="coffee-list">
                {coffeeData && 
                    coffeeData.map(coffee => {
                        return(
                            <Card 
                                coffeeId={coffee.id}
                                coffee={coffee}
                                key={coffee.id}
                            />
                        )
                    })
                }
                </div>
            </section>
        </>
       
        
    );
}

export default CoffeeList;