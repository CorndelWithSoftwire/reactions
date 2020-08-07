import React, {FunctionComponent, useState} from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";
import {GameOver} from "./GameOver/GameOver";

type Page = "Game" | "GameOver";

export const App: FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <AppContent/>
        </main>
    );
};

const AppContent = () => {
    const [page, setPage] = useState<Page>("Game");

    const startGame = (): void => {
        setPage("Game");
    }
    
    const endGame = (): void => {
        setPage("GameOver");
    }
    
    if (page === "GameOver") {
        return <GameOver startGame={startGame}/>
    }
    
    return <Game endGame={endGame} />
}

