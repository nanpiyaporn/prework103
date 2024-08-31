import  supabase from '../client';
import supabase from '../client/;
import {Link} from 'react-router-dom';

const Card = ({user, onDelete}) ={
    const handleDelete = async () => {
        const {data, error} = await supabase
        .from('name')
        .delete()
        .eq('id', user.id);
        onDelete();
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text">{user.age}</p>
                <Link to={`/edit/${user.id}`} className="card-link">Edit</Link>
                <button onClick={handleDelete} className="card-link">Delete</button>
            </div>
        </div>
    );
};


}