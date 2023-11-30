import './App.css';
import ChatBox from './components/chat/ChatBox';
import GifPicker from './components/chat/GifPicker';
import ServerList from './components/serverList/ServerList';

function App() {
    return (
        <div className='w-full h-full flex'>
            <GifPicker />
            <ServerList />
            <ChatBox />
            {/* <Modal title='Testing'>
                <p>Testing</p>
            </Modal> */}
        </div>
    );
}

export default App;

