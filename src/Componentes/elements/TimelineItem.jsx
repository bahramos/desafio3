import React from 'react';
import '../elements/TimelineItem.css' // Vamos criar este arquivo de estilos depois

const TimelineItem = ({ position = 'right', title, content }) => {
  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
