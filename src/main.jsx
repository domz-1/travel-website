import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EmojiProvider, Emoji } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/src/data.json';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <EmojiProvider data={emojiData}>
            <App />
        </EmojiProvider>
    </StrictMode>
);
