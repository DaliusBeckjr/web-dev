import {NavLink, Outlet } from 'react-router-dom'



const HelpLayout = () => {
    return ( 
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta animi impedit expedita voluptate voluptates, alias, blanditiis consequatur voluptatum voluptatem laborum quam delectus maxime earum exercitationem quod quidem ad. Doloremque.
            Error quae quo enim nobis distinctio praesentium optio aperiam, at deleniti. Dicta eos eius dolorem dolores nobis delectus! Maiores sit fugiat ducimus assumenda delectus totam repellat tempore vero excepturi expedita!</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>


            <Outlet />

        </div>
     );
}
 
export default HelpLayout;