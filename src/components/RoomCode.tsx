import copyImg from '../assets/copy.svg';
import '../styles/roomCodeComponent.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copy(){
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copy}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}