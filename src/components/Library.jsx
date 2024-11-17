import { useState, useEffect } from 'react' 

export default function Library() {
    const [cards, setCards] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch ('http://localhost:2333/api/cards');
            const json = await response.json();
            setCards(json);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Library</h1>
            <ul>
                { cards.map((card, index) => (
                    <li key={index} style = {{paddingBottom: '25px'}}>
                        <div>{card.name}</div>
                        <div>{card.position}</div>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}