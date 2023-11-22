import { Outlet } from 'react-router-dom'



const CareersLayout = () => {
    return (
        <div className="careers-layout">

        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestias vel minus rem maiores minima, nulla repellendus harum distinctio esse suscipit dicta reiciendis odit aspernatur officiis repellat soluta placeat ducimus!</p>



        <Outlet />
        </div>
    );
}

export default CareersLayout;