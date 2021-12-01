import IllustrationImg from '../assets/illustration.svg';
import LogoIconImg from '../assets/logo.svg';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import '../styles/home.scss';

export function NewRoom() {
  const { user } = useAuth();

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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder='Nome da sala'
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}