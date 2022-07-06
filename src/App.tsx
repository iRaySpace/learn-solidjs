import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Signal from './apps/signal';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Signal />
    </div>
  );
};

export default App;
