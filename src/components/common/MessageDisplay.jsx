
import { useState, useEffect } from 'react';

const MessageDisplay = ({ message, type = 'error', onDismiss }) => {
    // Auto-dismiss the message after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss();
        }, 4000);

        // Cleanup: Clear the timer if component unmounts or message changes
        return () => clearTimeout(timer);
    }, [message, onDismiss]);

    if (!message) return null;

    const isError = type === 'error';
    const displayClass = isError ? 'error-display' : 'success-display';
    const messageClass = isError ? 'error-message' : 'success-message';
    const progressClass = isError ? 'error-progress' : 'success-progress';

    return (
        <div className={`message-display ${displayClass}`}>
            <div className="message-content">
                {/* Display the message */}
                <span className={`message-text ${messageClass}`}>{message}</span>
                {/* Visual progress indicator (for auto-dismiss) */}
                <div className={`message-progress ${progressClass}`}></div>
            </div>
        </div>
    );
};



export const useMessage = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const showError = (message) => {
        setErrorMessage(message);
    };

    const showSuccess = (message) => {
        setSuccessMessage(message);
    };

    const dismissError = () => {
        setErrorMessage(null);
    };

    const dismissSuccess = () => {
        setSuccessMessage(null);
    };

    return {
        // Component that renders error display
        ErrorDisplay: () => (
            <MessageDisplay
                message={errorMessage}
                type="error"
                onDismiss={dismissError}
            />
        ),
        // Component that renders success display
        SuccessDisplay: () => (
            <MessageDisplay
                message={successMessage}
                type="success"
                onDismiss={dismissSuccess}
            />
        ),
        // Methods to control the displays
        showError,
        showSuccess,
        dismissError,
        dismissSuccess
    };
};

export default MessageDisplay;