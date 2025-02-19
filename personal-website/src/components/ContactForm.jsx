import { useState } from 'react';

export default function ContactForm() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(
                'YOUR_GOOGLE_SCRIPT_URL', 
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        data: formData
                    })
                }
            );

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };
    const inputFields = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Your Name',
            required: true
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Your Email',
            required: true
        },
        {
            type: 'text',
            name: 'subject',
            placeholder: 'Subject',
            required: true
        }
    ];

    return (
        <div className="contactFormContainer">
            <div className="contactIntro">
                <h2>Get In Touch</h2>
                <p>Feel free to reach out for opportunities, questions, or just to say hello!</p>
            </div>
            <form onSubmit={handleSubmit} className="contactForm">
                {inputFields.map((field) => (
                    <div className="formGroup" key={field.name}>
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                        />
                    </div>
                ))}

                <div className="formGroup">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows="6"
                    />
                </div>

                <button 
                    type="submit" 
                    className="submitButton"
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                    <p className="successMessage">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="errorMessage">Failed to send message. Please try again.</p>
                )}
            </form>
        </div>
    );
}
