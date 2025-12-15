import ReactDOM from "react-dom"

let BackdropOverlay = () => {
	return (
		<div className=" fixed justify-center items-center top-0 left-0 h-full w-full h-screen z-20 bg-black opacity-75"></div>
	)
}

let ModalOverlay = (props) => {
  return (
    <div
      className=" fixed top-0 left-0 flex items-center justify-center 
		 z-30 "
    >
      <div className=" bg-white p-4 rounded-lg shadow text-gray-900 mx-2">
        {props.children}
      </div>
    </div>
  );
};

let portalElement = document.getElementById("modal")

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal
