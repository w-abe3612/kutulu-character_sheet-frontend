import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { store } from './reducers/store'
import { Provider } from 'react-redux'


const container: HTMLElement | null = document.getElementById('app')!;
const root = createRoot(container);
root.render(
<Provider store={store}>
  <App />
</Provider>
);