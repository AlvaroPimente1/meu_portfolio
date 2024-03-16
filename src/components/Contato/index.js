import '../../App.css';
import emailjs from "emailjs-com";

function Contato() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_zyixjhj', 'template_d67ptxf', e.target, 'user_BLg80uyyFXNabuj2m8IGP')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()
    }

    return (
        <div className='bg-custom-blue items-center h-screen'>
            <div className='flex  flex-row space-x-8 justify-center py-48 items-center'>
                <div className='bg-custom-light-green w-2/4 items-center justify-center text-center rounded-lg'>
                    <div className='m-3 justify-around'>
                        <h2 className='text-custom-blue'>Formulário de contato</h2>
                        <form onSubmit={sendEmail}>
                    <div className="">
                        
                        <div className="">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="">
                        <label>Mensagem</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;
