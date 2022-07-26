import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notesList from '../notes.js';


function App() {
    return (
        <div>
            <Header />
            {
                notesList.map((note) => {
                    return <Note
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                })
            }

            <Footer />
        </div>
    );
}

export default App;
