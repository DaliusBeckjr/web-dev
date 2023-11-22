import { Form } from 'react-router-dom'




const Contact = () => {
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
            </Form>
        </div>
    );
}

export default Contact;