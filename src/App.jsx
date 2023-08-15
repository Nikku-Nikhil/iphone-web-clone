import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    console.log("TRIGGER PREVIEW")
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} className="content">
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
