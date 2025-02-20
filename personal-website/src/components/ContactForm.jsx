import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzg4qRHqyQzY6ENsCqh-ERT2b7-31XXNp7j58yd_parj9fInhQ60yMu0wW-AiQV1skn/exec';

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
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: formData
                })
            });

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setStatus('');
            }, 5000);

        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            
            setTimeout(() => {
                setStatus('');
            }, 5000);
        }
    };

    return (
        <div className="contactFormContainer">
            <div className="contactIntro">
                <h2>Contact Me</h2>
                <p>Feel free to reach out for opportunities or questions!</p>
            </div>
            <form onSubmit={handleSubmit} className="contactForm">
                <div className="formGroup">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="formGroup">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="formGroup">
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="formGroup message-group">
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
                    <p className="errorMessage">Failed to send message.</p>
                )}
            </form>
        </div>
    );
}
