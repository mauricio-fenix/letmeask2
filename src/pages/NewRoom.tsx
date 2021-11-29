import IllustrationImg from '../assets/illustration.svg';
import LogoIconImg from '../assets/logo.svg';
import GoogleIconImg from '../assets/google-icon.svg';
import '../styles/home.scss';
import { Button } from '../components/Button';

export function NewRoom() {
  return(
    <div id="page-home">
      <aside>
         <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
         <strong>Crie salas de Q&amp;A ao-vivo</strong>
         <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={LogoIconImg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder='Nome da sala'
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <a href='#'>clique aqui</a></p>
        </div>
      </main>
    </div>
  );
}