import { useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const downloadRef = useRef();
  const canvasElement = useRef();

  const handleRef = (ref) => {
    html2canvas(ref).then((canvas) => {
      canvasElement.current = canvas;
      downloadRef.current.appendChild(canvas);
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "QR.png";
    link.href = canvasElement.current.toDataURL();
    link.click();
  };

  return (
    <>
      <button onClick={handleDownload}>Download</button>

      <div ref={downloadRef}></div>

      <div className="hide">
        <div ref={handleRef} className="App">
          <img className="bg" src="/qa-bg.png" />
          <QRCode value="longbd" />
        </div>
      </div>
    </>
  );
}

export default App;
