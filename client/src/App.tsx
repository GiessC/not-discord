import './App.css';
import ChatBox from './components/chat/ChatBox';
import ServerList from './components/serverList/ServerList';

function App() {
    return (
        <div className='w-full h-full flex'>
            <ServerList />
            <ChatBox />
            {/* <Modal title='Testing'>
                <p>Testing</p>
            </Modal> */}
        </div>
    );
}

export default App;

