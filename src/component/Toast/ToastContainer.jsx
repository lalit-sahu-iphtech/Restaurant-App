import { 
    FaCheckCircle, 
    FaExclamationTriangle, 
    FaTimes, 
    FaTimesCircle, 
    FaInfoCircle 
} from "react-icons/fa";
import { useToast } from "../../context/ToastContext";
import "./Toast.css";

const ICONS = {
    success: <FaCheckCircle />,
    error: <FaTimesCircle />,
    warning: <FaExclamationTriangle />,
    info: <FaInfoCircle />,
};

export default function ToastContainer() {
    const { toasts, removeToast } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <div key={toast.id} className={`toast toast-${toast.type}`}>
                    <div className="toast-icon">
                        {ICONS[toast.type]}
                    </div>
                    <p className="toast-message">{toast.message}</p>
                    <button
                        className="toast-close"
                        onClick={() => removeToast(toast.id)}
                    >
                        <FaTimes size={12} />
                    </button>
                </div>
            ))}
        </div>
    );
}