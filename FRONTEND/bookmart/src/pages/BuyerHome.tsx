
import{useNavigate} from "react-router-dom";
import "./buyer.css"


const buyer = ()=> {
    const navigate = useNavigate();
    const handleListener = () =>{
        //Login Logic
        navigate('')
    }
    
    return(
<>
<body>
    <header>
        <h1>Book Management - Buyer Dashboard</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Browse Books</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Profile</a></li>
        </ul>
    </nav>
    <main>
        <section className="book-list">
            <h2>Available Books</h2>
            <div className="book">
                <h3>Book Title 1</h3>
                <p>Author: John Doe</p>
                <p>Price: $20</p>
                <button>Add to Cart</button>
                <button>Wishlist</button>
            </div>
            <div className="book">
                <h3>Book Title 2</h3>
                <p>Author: Jane Doe</p>
                <p>Price: $25</p>
                <button>Add to Cart</button>
                <button>Wishlist</button>
            </div>
        </section>
    </main>
</body>
</>)
}
export default buyer;