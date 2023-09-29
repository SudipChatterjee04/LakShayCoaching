import React from "react";
import './NotesSection.css';
import img_1 from "./campaign-creators-gMsnXqILjp4-unsplash.jpg"
// NoteCard component


const NoteCard = ({ imgSrc, title, description }) => {
  // Generate a unique ID based on the current timestamp
  const uniqueId = `note_${Date.now()}`;

  // Define a click handler function
  const handleClick = () => {
    // Add your click handling logic here
    // For example, you can open a modal or navigate to a new page
  };

  return (
    <div onClick={handleClick} className="padding-top-bot">
      <img
        id={uniqueId} // Use the generated unique ID
        style={{ margin: "auto" }}
        className="side-logo-img align-left display-inblock"
        src={imgSrc}
        alt=""
      />
      <div className="mar-y">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};



// NoteList component
const NoteList = ({ notes }) => (
  <div className="scroll">
    {notes.map((note, index) => (
      <NoteCard
        key={index}
        imgSrc={note.imgSrc}
        title={note.title}
        description={note.description}
      />
    ))}
  </div>
);

// Parent component
const NotesSection = () => {
  const notes = [
    {
      imgSrc: "./campaign-creators-gMsnXqILjp4-unsplash.jpg",
      title: "Math Chapter 1",
      description: "Here you will get the complete PDF of this chapter.",
    },
   
  ];

  return (
    <section className="text">
      <div className="contain">
        <div className="row tut__container">
          <div className="col-lg-8 col-sm-10">
          {/* {notes.map()} */}
            <img
              id="targetedImg"
              style={{ width: "100%", height: "60vh"}}
              src={img_1}
              alt=""
            />
            <div className="padding-top-bot2">
              <h3>Math Chapter Integration</h3>
              <span>Download Notes Here</span>
              <button className="btn">
                <i className="fa fa-download"></i> Download
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-14">
            <NoteList notes={notes} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;
