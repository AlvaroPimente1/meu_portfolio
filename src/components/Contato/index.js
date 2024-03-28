import '../../App.css';
import emailjs from "emailjs-com";

function Contato({ forwardedRef }) {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_zyixjhj', 'template_d67ptxf', e.target, '')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()
    }

    return (
        <div ref={forwardedRef} className='bg-custom-blue items-center h-max'>
            <div className='text-center'>
                <p className='text-white'>teste</p>
            </div>
        </div>
    );
}

export default Contato;
