import './Card.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function Card({coffee}) {
    return (
        <div className="card" id={coffee.id}>
            <div className='coffee-img-wrapper'>
                <img 
                    className="coffee-img" 
                    src={coffee.image} 
                    alt="Imagem do café" 
                />
                { coffee.popular &&
                    <p className='coffee-pop'>Popular</p>
                }
            </div>
            <div className='info-card'>
                <h3 className="coffee-name">{coffee.name}</h3>
                <div className='rating'>
                    {coffee.rating ? 
                        <FaStar className='rating-icon' size={20} color='yellow' /> : 
                        <CiStar className='rating-icon' size={20} color='white' />
                    }
                    <p className='rating-text' >{coffee.rating ? coffee.rating : <span className='rating-votes'>No ratings</span> }</p>
                    {coffee.rating && 
                        <p className='rating-votes' >({coffee.votes} votes)</p>
                    }
                    <p className="coffee-price">{coffee.price}</p>
                </div>
                { !coffee.available &&
                    <p className='coffee-available'>Sold Out</p>
                }
            </div>
            
            {console.log(coffee)}
        </div>

    )
}

export default Card;