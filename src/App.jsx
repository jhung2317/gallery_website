import React from 'react';
import './App.css'

function App() {

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <header>
        Header content 
    </header>
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0" className="container" onWheel={handleScroll}>
        <img className="image" alt="Icon" src="/images/img-2.jpg" draggable="false" />
        <img className="image" alt="Icon" src="/images/img-3.jpg" draggable="false" />
        <img className="image" alt="Icon" src="/images/img-9.jpg" draggable="false" />
        <img className="image" alt="Icon" src="/images/img-2.jpg" draggable="false" />
        <img className="image" alt="Icon" src="/images/img-3.jpg" draggable="false" />
        <img className="image" alt="Icon" src="/images/img-9.jpg" draggable="false" />
      </div>
      <footer>
        Footer content
      </footer>
    </>
  )
}

export default App
