import { useLoaderData, Link } from 'react-router-dom'



export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>based in {career.location}</p>
                </Link>
            ))}

        </div>
    )
}

// loader function
export const careersLoader = async () => {
    const backendURI = 'http://localhost:5001/careers';

    const res = await fetch(backendURI)

    return res.json()
}