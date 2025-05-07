import { useEffect, useRef, useState } from 'react';
import { sendLeadData } from '../../../utils/sendLeadData';
import styles from './FormLead.module.css';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { PatternFormat } from 'react-number-format';

const textAreaLabel: string = 'Qual seu objetivo?';
const textAreaPlacehold: string = 'Insira qual seu objetivo...';

function FormLead() {
    const [isSubmitted, setIsSubmitted] = useState(() => {
        const saved = localStorage.getItem('isSubmitted');
        return saved ? JSON.parse(saved) : false;
    });
    const [isLoading, setIsLoading] = useState(false);
    const [validationError, setValidationError] = useState('');
    const recaptchaScriptLoaded = useRef(false);

    useEffect(() => {
        if(!recaptchaScriptLoaded.current) {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
            script.async = true;
            script.defer = true;

            script.onload = () => {
                console.info('reCAPTCHA script loaded');
                recaptchaScriptLoaded.current = true;
            };

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isSubmitted', JSON.stringify(isSubmitted));
    }, [isSubmitted]);

    const executeRepcatcha = async (action: string) => {
        if(!window.grecaptcha) {
            console.error('reCAPTCHA script not loaded');
            return null;
        }

        try {
            const token = await window.grecaptcha.execute(
                import.meta.env.VITE_RECAPTCHA_SITE_KEY, 
                { action }
            );

            return token;
        } catch (err) {
            console.error('Error executing reCAPTCHA:', err);
            return null;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValidationError('');
        
        const form = event.currentTarget as HTMLFormElement;

        const formData = new FormData(form);
        
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        
        if ((!email || email.trim() === '') && (!phone || phone.trim() === '')) {
            setValidationError('Por favor, forneça pelo menos um e-mail ou telefone para contato.');
            return;
        }        

        try {
            setIsLoading(true);

            const token = await executeRepcatcha('submit');

            if (!token) {
                setValidationError('Falha ao validar reCAPTCHA. Tente novamente.');
                toast.error('Falha na verificação de segurança. Por favor, tente novamente.');
                setIsLoading(false);
                return;
            }

            const data = {
                name: formData.get('name') as string,
                age: formData.get('age') as string,
                email: email,
                phone: phone,
                reason: formData.get('reason') as string,
                recaptchaToken: token
            };

            const result = await sendLeadData(data);

            setIsLoading(false);
            
            if(result.status === 200) {
                toast.success('Formulário enviado com sucesso!');

                setIsSubmitted(true);
                form.reset();
            }

        }catch (err) {
            setIsLoading(false);
            console.error('Error sending lead data:', err);
            toast.error('Erro ao enviar os dados. Por favor, tente novamente.');
        }
    };

    if (isLoading) {
        return (
            <div className={styles.loadingOverlay}>
                <div className={styles.loadingContainer}>
                    <BeatLoader color="#1fd557" size={50} />
                    <p>Aguarde um instante...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formDiv}>
            {!isSubmitted ? (
            <form className="formContent" onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <div className={`${styles.field} ${styles.fieldName}`}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" placeholder='Insira seu nome...' required />
                    </div>
                    <div className={`${styles.field} ${styles.fieldAge}`}>
                        <label htmlFor="age">Idade</label>
                        <input type="text" id="age" name="age" placeholder='Insira sua idade...' required />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.field} ${styles.fieldEmail}`}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder='Insira seu email...' />
                    </div>
                    <div className={`${styles.field} ${styles.fieldPhone}`}>
                        <label htmlFor="phone">Telefone</label>
                        <PatternFormat
                            format="(##) #####-####"
                            mask="_"
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Insira seu telefone...'
                            className={styles.input}
                        />
                    </div>
                </div>

                {validationError && (
                    <div>
                        <span style={{ color: 'var(--warning)' }}>{validationError}</span>
                    </div>
                )}

                <div className={styles.row}>
                    <div className={`${styles.field} ${styles.fieldTextArea}`}>
                        <label htmlFor="reason">{textAreaLabel}</label>
                        <textarea placeholder={textAreaPlacehold} id="reason" name="reason" cols={3} required />
                    </div>
                </div>

                <div className={styles.row}>
                    <button type="submit" disabled={isLoading}>Enviar</button>
                </div>
            </form>
            ) : (
                <div className={styles.successMessage}>
                    
                    <h2>Obrigado por se inscrever!</h2>
                    <p>Entraremos em contato em breve.</p>
                </div>
            )}
        </div>
    );
}

export default FormLead;