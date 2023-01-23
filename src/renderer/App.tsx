import { FC, useEffect, useRef } from 'react';
import './App.css';

const App: FC = () => {
  const max = 400;
  const sectionRef = useRef<HTMLElement | null>();

  function sparkels() {
    for (let i = 0; i < max; i += 1) {
      const span = document.createElement('span');
      const posx = Math.random() * window.innerWidth - 32;
      const posY = Math.random() * window.innerHeight - 32;
      const width = Math.random() * 38;
      const delay = Math.random() * 5;
      const height = Math.random() * 10;

      span.style.left = `${posx}px`;
      span.style.top = `${posY}px`;
      span.style.width = `${width}px`;
      span.style.height = `${height}px`;
      span.style.animationDelay = `${delay}s`;

      sectionRef.current?.append(span);
    }
  }

  useEffect(() => {
    sparkels();
  }, []);

  return (
    <section
      ref={(ref) => {
        sectionRef.current = ref;
      }}
    >
      <div className="card">
        <div className="newyear" data-year="2023">
          <div className="text">新春快乐，兔年吉祥🎆🎆🎆🎆</div>
        </div>
      </div>
    </section>
  );
};

export default App;
