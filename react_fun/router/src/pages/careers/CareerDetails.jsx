import { useLoaderData, useParams } from 'react-router-dom'


export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()

    return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>starting salary: {career.salary}</p>
        <p>location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro quod voluptates reprehenderit quas placeat voluptatibus, sequi, quis officiis eos necessitatibus. Placeat quidem enim beatae, numquam voluptates facilis reprehenderit rem.</p>
        </div>
    </div>
)
}



// loader function
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    const backendURI = 'http://localhost:5001/careers/';

    const res = await fetch(backendURI + id)

    if(!res.ok) {
        throw Error('could not find career')
    }

    return res.json()
}
