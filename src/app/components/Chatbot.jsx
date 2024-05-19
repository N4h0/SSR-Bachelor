"use client";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPaperPlane, faRobot } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/Chatbot.module.css";

function Chatbot() {
    const chatBodyRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [showPopup, setShowPopup] = useState(true);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const sendMessage = (content, type = "user") => {
        if (content.trim()) {
            const time = new Date().toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
            });
            setMessages((prev) => [...prev, { type, content, time }]);
        }
    };

    useEffect(() => {
        const WELCOME_MESSAGE = {
            type: "bot",
            content: "Hei der 👋! Velkommen til siden. Gi meg beskjed dersom du har noen spørsmål.",
            time: new Date().toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        if (isOpen && messages.length === 0) {
            setMessages([WELCOME_MESSAGE]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const closePopup = () => setShowPopup(false);

    const handleChatbotButtonClick = () => {
        if (showPopup) {
            setShowPopup(false);
        }
        setIsOpen(true);
    };

    return (
        <div className={styles.Chat}>
            {showPopup && (
                <div className={styles.popupContainer}>
                    <div className={styles.popupBox}>
                        <button className={styles.closeButton} onClick={closePopup}>
                            <FontAwesomeIcon icon={faTimes} style={{ color: "black", float: "right" }} />
                        </button>
                        <h2>Velkommen til vår chatbot!</h2>
                        <p>Vi er her for å hjelpe deg. Spør oss gjerne om hva som helst!</p>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button className={styles.chatButton} onClick={handleChatbotButtonClick} aria-label="Start chat">
                    <FontAwesomeIcon icon={faRobot} />
                </button>
            )}
            {isOpen && (
                <ChatDialog onSend={sendMessage} onClose={() => setIsOpen(false)} messages={messages} showSuggestions={showSuggestions} setShowSuggestions={setShowSuggestions} />
            )}
        </div>
    );
}

function ChatDialog({ onSend, onClose, messages, showSuggestions, setShowSuggestions }) {
    return (
        <div className={styles.chatDialog}>
            <ChatHeader onClose={onClose} />
            <ChatBody messages={messages} onSend={onSend} showSuggestions={showSuggestions} setShowSuggestions={setShowSuggestions} />
            <ChatFooter onSend={onSend} setShowSuggestions={setShowSuggestions} />
        </div>
    );
}

function ChatHeader({ onClose }) {
    return (
        <div className={styles.chatHeader}>
            <img src="/mn-regnskap-logo.webp" alt="Logo" className={styles.chatLogo} />
            <div className={styles.chatHeaderText}>
                <h6 className={styles.chatHeaderOverskrift}>Chat med oss!</h6>
                <span>Vi svarer så fort vi kan.</span>
            </div>
            <button className={styles.closeChat} onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
}

function ChatBody({ messages, onSend, showSuggestions, setShowSuggestions }) {
    const chatBodyRef = useRef(null);
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSuggestionClick = (suggestionContent) => {
        onSend(suggestionContent, 'user');
        setShowSuggestions(false);

        fetch("https://n4h0.pythonanywhere.com/api/chatbot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: suggestionContent }),
        })
            .then((response) => response.json())
            .then((data) => {
                const formattedTime = new Date().toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" });
                onSend(data.answer || data, 'bot', formattedTime);
            })
            .catch((error) => {
                console.error("Error fetching response from server:", error);
                onSend("Det skjedde en feil, kjører serveren?", 'bot');
            });
    };

    const renderMessages = () => {
        return messages.map((msg, index) => {
            if (msg.type === "suggestion") {
                return showSuggestions ? (
                    <div key={index} className={`${styles.messageContainer} ${styles.suggestionContainer}`}>
                        <div className={styles.suggestionBubble}>
                            <button className={styles.suggestionButton} onClick={() => handleSuggestionClick(msg.content)}>
                                {msg.content}
                            </button>
                        </div>
                    </div>
                ) : null;
            } else {
                return (
                    <div key={index} className={`${styles.messageContainer} ${msg.type === "user" ? styles.userContainer : styles.botContainer}`}>
                        {msg.type === "bot" && <FontAwesomeIcon icon={faRobot} className={styles.botIcon} />}
                        <div className={`${msg.type === "user" ? styles.userMessage : styles.botMessage} ${styles.chatMessage}`}>
                            <p className={styles.messageContent}>{msg.content}</p>
                            <div className={styles.messageTime}>{msg.time}</div>
                        </div>
                    </div>
                );
            }
        });
    };

    return (
        <div className={styles.chatBody} ref={chatBodyRef}>
            {renderMessages()}
        </div>
    );
}

function ChatFooter({ onSend, setShowSuggestions }) {
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => setMessage(e.target.value);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (message.trim() !== "") {
            onSend(message);
            setMessage("");
            const formattedTime = new Date().toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
            });

            fetch("https://n4h0.pythonanywhere.com/api/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: message }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.suggestions && data.suggestions.length > 0) {
                        onSend(data.message, "bot");

                        data.suggestions.forEach((suggestion) => {
                            const suggestionMessage = suggestion.question;
                            setShowSuggestions(true);
                            onSend(suggestionMessage, "suggestion");
                            setShowSuggestions(true);
                        });
                    } else if (typeof data === "string") {
                        const newBotResponse = {
                            type: "bot",
                            content: data,
                            time: formattedTime,
                        };
                        onSend(newBotResponse.content, "bot");
                        setShowSuggestions(false);
                    } else {
                        onSend("Beklager, jeg forstod ikke det. Kan du prøve å formulere spørsmålet annerledes?", "bot");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching response from server:", error);
                    onSend("Det skjedde en feil, kjører serveren?", "bot");
                    setShowSuggestions(true);
                });
        }
    };

    return (
        <div className={styles.chatFooter}>
            <input
                type="text"
                className={styles.messageInput}
                placeholder="Skriv inn meldingen din ..."
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <button className={styles.sendMessage} onClick={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
}

export default Chatbot;
