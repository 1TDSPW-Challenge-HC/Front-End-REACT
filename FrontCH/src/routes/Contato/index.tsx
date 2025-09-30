import { useState } from 'react';

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Contato() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submissions, setSubmissions] = useState<typeof formData[]>([]);

    function validateForm(data: typeof formData): FormErrors {
        const errors: FormErrors = {};
        
        if (data.name.length < 3) {
            errors.name = 'Nome deve ter pelo menos 3 caracteres';
        }
        
        if (!data.email.includes('@')) {
            errors.email = 'Email inválido';
        }
        
        if (data.message.length < 10) {
            errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
        }

        return errors;
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors({});
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSubmissions(prev => [...prev, formData]);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
    }

    return (
        <main className="p-4">
            <div className="block">
                <h2 className="section-title">Contate-nos</h2>
                <form className="form-container" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`input-base ${errors.name ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input-base ${errors.email ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`input-base min-h-[100px] ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button type="submit" className="button-base">
                        Enviar
                    </button>
                </form>
                {submissions.length > 0 && (
                    <div className="submissions-list mt-8 w-full">
                        <h3 className="block-title mb-4">Feedbacks recebidos</h3>
                        {submissions.map((item, idx) => (
                            <div key={idx} className="submission-item">
                                <p><span className="font-bold">Nome:</span> {item.name}</p>
                                <p><span className="font-bold">Mensagem:</span> {item.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}