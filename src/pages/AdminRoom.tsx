import LogoIconImg from '../assets/logo.svg';
import DeleteIcon from '../assets/delete.svg';
import CheckIcon from '../assets/check.svg';
import AnswredIcon from '../assets/answer.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useParams, useHistory } from 'react-router-dom';
import { database } from '../services/firebase';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';
import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {

  const params = useParams<RoomParams>();
  const roomId = params.id;
  const {title, questions} = useRoom(roomId);
  const history = useHistory();

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
     await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    if(window.confirm('Tem certeza que você deseja encerrar esta sala?')) {
      await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      })
      history.push('/');
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }
  async function handleHighlightedQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true,
    });
  }

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={LogoIconImg} alt="Logo do letmeask"/>
          <RoomCode code={roomId}/>
          <Button isOutlined onClick={handleEndRoom} >Encerrar sala</Button>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} perguntas</span> }
        </div>

        <div className="question-list">
          {questions.map(question => {
            return(
              <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighLighted={question.isHighLighted}
              >
              {
                !question.isAnswered && (
              <>
                <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                  <img src={CheckIcon} alt='Marcar pergunta'/>
                </button>
                
                <button type="button" onClick={() => handleHighlightedQuestion(question.id)}>
                  <img src={AnswredIcon} alt='Responder pergunta'/>
                </button>
              </>
              )
              }
              <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                <img src={DeleteIcon} alt='Deletar pergunta'/>
              </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
