import  supabase from '../client';
import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({creator, onDelete}) =>{
    const handleDelete = async () => {
        const {data, error} = await supabase
        .from('creatorverse')
        .delete()
        .eq('id', creator.id);
        if (error){
            console.error(error)
        }
        if (data) {
            console.log(data)
            onDelete(creator.id);  // Call the parent component's onDelete function with the deleted user's ID 
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
              
                <Link to={`/edit/${user.id}`} className="card-link">Edit</Link>
                <button onClick={handleDelete} className="card-link">Delete</button>
            </div>
        </div>
    );
};


export default Card;