import IllustrationImg from '../assets/illustration.svg';
import LogoIconImg from '../assets/logo.svg';
import GoogleIconImg from '../assets/google-icon.svg';
import '../styles/home.scss';
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState, FormEvent } from 'react';
import { database } from '../services/firebase';

export function Home() {

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomKey, setRoomKey] = useState('');

  async function handleToRoomCreate() {
    if(!user) {
      await signInWithGoogle();
    }
    
    history.push('/rooms/new');
  }

  async function handleEnterRoom(event: FormEvent) {
    event.preventDefault();
    if(roomKey.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomKey}`).get();

    if(!roomRef.exists()){
      alert('Room does not exists.');
      return;
    }

    if(roomRef.val().endedAt){
      alert('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomKey}`);

  }

  return (
    <div id="page-home">
      <aside>
         <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
         <strong>Crie salas de Q&amp;A ao-vivo</strong>
         <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={LogoIconImg} alt="letmeask" />
          <button onClick={handleToRoomCreate} className='create-room'>
            <img src={GoogleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form onSubmit={handleEnterRoom}>
            <input
              type="text"
              placeholder='Digite o código da sala'
              onChange={event => setRoomKey(event.target.value)}
              value={roomKey}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}