import { Link } from 'react-router-dom' 

const NotFound = () => {
    return ( 
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellat corrupti expedita modi quod commodi nam dolor sequi molestiae fuga accusantium iure vel. Obcaecati fugiat perferendis omnis, consequuntur hic cum.</p>

            <p>Go to the <Link to="/">Homepage</Link> </p>
        </div>
    );
}

export default NotFound;