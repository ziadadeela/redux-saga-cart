import React from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div>
                <button className="btn btn-lg">
                    <Link to={`/check-out`}>To Check Out</Link>
                </button>
            </div>
            <div>
                <button className="btn btn-lg">
                    <Link to={`/item`}>Add Item</Link>
                </button>
            </div>
            <div>
                <button className="btn btn-lg">
                    <Link to={`/items`}>Items List</Link>
                </button>
            </div>
        </div>
    )
};