import React, {useState} from "react";
import{useNavigate} from "react-router-dom";
import "./Seller.css"


const seller = ()=> {
    const navigate = useNavigate();
    const handleListener = () =>{
        //Login Logic
        navigate('')
    }
    
    return(
        <> 

    <div>
        <h1>Book Management - Seller Dashboard</h1>
    </div>
    <nav>
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Add Book</a></li>
            <li><a href="#">Manage Inventory</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Profile</a></li>
        </ul>
    </nav>
    <main>
        <section className="book-list">
            <h2>Books for Sale</h2>
            <div className="book">
                <h3>Book Title 1</h3>
                <p>Author: John Doe</p>
                <p>Price: $20</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div className="book">
                <h3>Book Title 2</h3>
                <p>Author: Jane Doe</p>
                <p>Price: $25</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </section>
    </main>
    </>
    )}
    export default seller