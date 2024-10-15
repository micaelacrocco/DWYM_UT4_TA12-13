import React from 'react';
import { UserProvider } from './contexts/userContext';
import UserDisplay from './components/UserDisplay';
import UserNameUpdater from './components/UserNameUpdater';
import './App.css'

function App() {
    return (
        <UserProvider>
            <div className="App">
                <h1>Aplicación con Contexto</h1>
                <UserDisplay />
                <UserNameUpdater />
            </div>
        </UserProvider>
    );
}

export default App;
