import React, {} from 'react';
import './App.css';
import PostContainer from "./components/PostContainer";

function App() {
    return (
        <div className="App">
            {/*{isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null,  2)}*/}
            <div style={{display: 'flex'}}>
                <PostContainer/>
            </div>
            
        </div>
    );
}

export default App;
