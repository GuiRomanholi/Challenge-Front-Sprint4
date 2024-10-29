
import Link from 'next/link';

export default function Login() {
  return (
    <div className='lo-loginContainer'>
          <form id="form-login" className='lo-loginForm'>
            <h2>Login</h2>
            <input type="text" name="txtLogin" id="idLogin" className='lo-inputField' placeholder="Usuário" required/>
            <input type="password" name="txtSenha" id="idSenha" className='lo-inputField' placeholder="Senha" required/>
            <button type="submit" className='lo-submitButton'>Entrar</button>
            <Link className='lo-createAccountLink' href={"/cadastro"}>Criar uma conta</Link>
          </form>
    </div>
  )
}
