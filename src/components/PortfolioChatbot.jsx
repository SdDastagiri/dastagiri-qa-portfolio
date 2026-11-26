import ReactMarkdown from 'react-markdown'
import { useEffect, useRef, useState } from 'react'
import {
    Bot,
    X,
    Send,
    MessageCircle,
    Sparkles,
    User,
    LoaderCircle,
    RotateCcw,
} from 'lucide-react'

const suggestions = [
    'Tell me about Dastagiri',
    'Explain his TCB experience',
    'What are his automation skills?',
    'Tell me about POS-SDK',
    'Does he have mobile automation experience?',
]

const welcomeMessage = {
    role: 'assistant',
    content:
        "Hello! Welcome to Dastagiri's portfolio. 👋 I'm his AI portfolio assistant. Ask me about his QA experience, automation skills, projects, or professional background.",
}

export default function PortfolioChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([welcomeMessage])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [messages, loading, isOpen])

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
        }
    }, [isOpen])

    const sendMessage = async (text = input) => {
        const question = text.trim()

        if (!question || loading) return

        const userMessage = {
            role: 'user',
            content: question,
        }

        const updatedMessages = [...messages, userMessage]

        setMessages(updatedMessages)
        setInput('')
        setLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: updatedMessages
                        .filter((message) =>
                            ['user', 'assistant'].includes(message.role)
                        )
                        .slice(-9)
                        .map(({ role, content }) => ({ role, content })),
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Unable to get a response.')
            }

            setMessages((previous) => [
                ...previous,
                {
                    role: 'assistant',
                    content: data.reply,
                },
            ])
        } catch (error) {
            setMessages((previous) => [
                ...previous,
                {
                    role: 'assistant',
                    content:
                        error.message ||
                        'Sorry, something went wrong. Please try again.',
                },
            ])
        } finally {
            setLoading(false)
        }
    }

    const resetChat = () => {
        setMessages([welcomeMessage])
        setInput('')
    }

    return (
        <div className="portfolio-chatbot">

            {/* Floating launcher */}
            {!isOpen && (
                <button
                    className="chatbot-launcher"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open AI portfolio assistant"
                    aria-expanded={isOpen}
                >
                    <MessageCircle size={25} />
                    <span className="chatbot-launcher-dot" />
                </button>
            )}

            {/* Chat window */}
            {isOpen && (
                <section
                    className="chatbot-window"
                    aria-label="Dastagiri AI portfolio assistant"
                >
                    {/* Header */}
                    <header className="chatbot-header">
                        <div className="chatbot-avatar">
                            <Bot size={23} />
                        </div>

                        <div className="chatbot-header-info">
                            <h3>Dastagiri AI</h3>
                            <span>
                                <i />
                                Portfolio Assistant
                            </span>
                        </div>

                        <button
                            className="chatbot-icon-button"
                            onClick={resetChat}
                            aria-label="Start a new conversation"
                            title="New conversation"
                        >
                            <RotateCcw size={17} />
                        </button>

                        <button
                            className="chatbot-icon-button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chatbot"
                        >
                            <X size={20} />
                        </button>
                    </header>

                    {/* Messages */}
                    <div className="chatbot-messages" aria-live="polite">

                        <div className="chatbot-intro">
                            <Sparkles size={17} />
                            <span>AI-powered portfolio assistant</span>
                        </div>

                        {messages.map((message, index) => (
                            <div
                                className={`chatbot-message ${message.role === 'user'
                                        ? 'chatbot-message-user'
                                        : 'chatbot-message-assistant'
                                    }`}
                                key={index}
                            >
                                <div className="chatbot-message-avatar">
                                    {message.role === 'user' ? (
                                        <User size={15} />
                                    ) : (
                                        <Bot size={16} />
                                    )}
                                </div>

                                <div className="chatbot-message-content">
                                    {message.role === 'assistant' ? (
                                        <ReactMarkdown>{message.content}</ReactMarkdown>
                                    ) : (
                                        message.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {messages.length === 1 && (
                            <div className="chatbot-suggestions">
                                <span>QUICK QUESTIONS</span>

                                {suggestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => sendMessage(suggestion)}
                                        disabled={loading}
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}

                        {loading && (
                            <div className="chatbot-typing">
                                <LoaderCircle size={16} className="chatbot-spinner" />
                                <span>Thinking...</span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form
                        className="chatbot-input-area"
                        onSubmit={(event) => {
                            event.preventDefault()
                            sendMessage()
                        }}
                    >
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Ask me anything..."
                            maxLength={1000}
                            disabled={loading}
                            aria-label="Type your message"
                        />

                        <button
                            type="submit"
                            disabled={!input.trim() || loading}
                            aria-label="Send message"
                        >
                            <Send size={18} />
                        </button>
                    </form>

                    <div className="chatbot-footer">
                        Powered by AI · Dastagiri's Portfolio
                    </div>
                </section>
            )}
        </div>
    )
}
