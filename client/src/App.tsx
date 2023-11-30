import './App.css';
import ChatBox from './ChatBox';
import ServerList from './ServerList';

function App() {
    return (
        <div className='w-full h-full flex'>
            <ServerList />
            <ChatBox />
        </div>
    );
}

export default App;

