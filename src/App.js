import { useSelector } from 'react-redux';


import './App.css';
import AddGameForm from './components/AddGameForm/AddGameForm';
import GameList from './components/GameList/GameList';
import LoadButton from './components/LoadButton/LoadButton';

function App() {
  const games = useSelector(state => {
    const {gamesReducer} = state;
    return gamesReducer.games;
  });

  return (
    <div className='container'>
      <h1 className='text-info my-4'>Games list</h1>

      <div className='row justify-content-around mb-4'>
        <button type="button" className="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add new game
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add new game</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <AddGameForm />
              </div>
            </div>
          </div>
        </div>
        
        <LoadButton />
      </div>
      
      
      <GameList games={games} />
    </div>
    
  );
}

export default App;
