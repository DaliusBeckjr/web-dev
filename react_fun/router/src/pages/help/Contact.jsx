import { Form, useActionData, redirect } from 'react-router-dom'




export default function Contact(){
    const data = useActionData()


    return ( 
        <div className="contact">
            <Form method='post' action='/help/contact'>
            <label >
                    <span>Your Email:</span>
                    <input type="email" name="email" required />
                </label>
                <label >
                    <span>Your Message:</span>
                    <textarea name="message" cols="30" rows="10" required></textarea>
                </label>
                <button>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form> 
        </div>
    );
}

export const contactAction = async ({ request }) => {
    console.log(request);
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    console.log(submission)

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailRegex.test(submission.email)) {
    //     return { error: 'Invalid Email!'};
    // }

    if (submission.message.length < 10) {
        return { error: 'message must be over 10 chars long' };
    }

    return redirect('/')
}