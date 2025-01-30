import { Toast, ToastContainer } from "react-bootstrap";

interface ToastMessageProps {
  message: string;
  show: boolean;
  type: boolean;
  onClose: () => void;
}

function ToastMessage({ message, show, onClose, type }: ToastMessageProps) {
  const variant = type === true ? "success" : "danger";

  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 1040,
          }}
        ></div>
      )}

      <ToastContainer position="middle-center" style={{ zIndex: 1050 }}>
        {show && (
          <Toast bg={variant} onClose={onClose}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Notificação do sistema</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </>
  );
}

export default ToastMessage;
