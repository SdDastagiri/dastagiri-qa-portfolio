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
    Volume2,
    Pause,
    Play,
    Square,
    Mic,
    MicOff,
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
    const recognitionRef = useRef(null)
    const [isListening, setIsListening] = useState(false)
    const [speakingIndex, setSpeakingIndex] = useState(null)
    const [speechPaused, setSpeechPaused] = useState(false)

    useEffect(() => {
        return () => {
            window.speechSynthesis?.cancel()
        }
    }, [])

    const stopSpeaking = () => {
        window.speechSynthesis?.cancel()
        setSpeakingIndex(null)
        setSpeechPaused(false)
    }

    const toggleSpeech = (content, index) => {
        if (!('speechSynthesis' in window)) {
            alert('Text-to-speech is not supported by this browser.')
            return
        }

        const speech = window.speechSynthesis

        if (speakingIndex === index && speech.speaking) {
            if (speechPaused) {
                speech.resume()
                setSpeechPaused(false)
            } else {
                speech.pause()
                setSpeechPaused(true)
            }
            return
        }

        speech.cancel()
        setSpeakingIndex(index)
        setSpeechPaused(false)

        const plainText = content
            .replace(/[#*_`>\[\]()]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()

        const utterance = new SpeechSynthesisUtterance(plainText)

        const voices = window.speechSynthesis.getVoices()

        const femaleVoice = voices.find((voice) =>
            /female|zira|samantha|karen|susan|aria|jenny/i.test(voice.name)
            && voice.lang.startsWith('en')
        )

        utterance.voice = femaleVoice || voices.find(
            (voice) => voice.lang === 'en-IN'
        ) || voices.find(
            (voice) => voice.lang.startsWith('en')
        )

        utterance.lang = utterance.voice?.lang || 'en-IN'
        utterance.rate = 0.95
        utterance.pitch = 1.12

        utterance.onend = () => {
            setSpeakingIndex(null)
            setSpeechPaused(false)
        }
        utterance.onerror = () => {
            setSpeakingIndex(null)
            setSpeechPaused(false)
        }

        speech.speak(utterance)
    }

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

    const toggleVoiceInput = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition

        if (!SpeechRecognition) {
            alert('Voice input is not supported in this browser. Please use Google Chrome.')
            return
        }

        if (isListening) {
            recognitionRef.current?.stop()
            setIsListening(false)
            return
        }

        const recognition = new SpeechRecognition()
        recognitionRef.current = recognition
        recognition.lang = 'en-IN'
        recognition.continuous = false
        recognition.interimResults = true

        recognition.onstart = () => setIsListening(true)

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => result[0].transcript)
                .join(' ')
            setInput(transcript)
        }

        recognition.onerror = (event) => {
            setIsListening(false)
            if (event.error !== 'no-speech' && event.error !== 'aborted') {
                alert('Could not capture your voice. Please check microphone permission and try again.')
            }
        }

        recognition.onend = () => {
            setIsListening(false)
            recognitionRef.current = null
        }

        recognition.start()
    }

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
        stopSpeaking()
        recognitionRef.current?.stop()
        setIsListening(false)
        setMessages([welcomeMessage])
        setInput('')
    }

    return (
        <div className="portfolio-chatbot">

            {/* Floating launcher */}
            {/* Floating launcher and greeting */}
            {!isOpen && (
                <>
                    <button
                        className="chatbot-greeting"
                        onClick={() => setIsOpen(true)}
                        aria-label="Chat with Dastagiri AI"
                    >
                        <span className="chatbot-greeting-wave">👋</span>
                        <span>
                            <strong>Hi there!</strong>
                            <small>Want to know about Dastagiri?</small>
                        </span>
                    </button>

                    <button
                        className="chatbot-launcher"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open AI portfolio assistant"
                        aria-expanded={isOpen}
                    >
                        <MessageCircle size={25} />
                        <span className="chatbot-launcher-dot" />
                    </button>
                </>
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
                            onClick={() => {
                                recognitionRef.current?.stop()
                                setIsListening(false)
                                stopSpeaking()
                                setIsOpen(false)
                            }}
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
                                        <>
                                            <ReactMarkdown>{message.content}</ReactMarkdown>
                                            <div className="chatbot-speech-controls">
                                                <button
                                                    type="button"
                                                    className="chatbot-speech-button"
                                                    onClick={() => toggleSpeech(message.content, index)}
                                                    aria-label={
                                                        speakingIndex === index
                                                            ? speechPaused ? 'Resume answer' : 'Pause answer'
                                                            : 'Listen to answer'
                                                    }
                                                    title={
                                                        speakingIndex === index
                                                            ? speechPaused ? 'Resume' : 'Pause'
                                                            : 'Listen to answer'
                                                    }
                                                >
                                                    {speakingIndex === index
                                                        ? speechPaused
                                                            ? <Play size={15} />
                                                            : <Pause size={15} />
                                                        : <Volume2 size={16} />}
                                                    <span>
                                                        {speakingIndex === index
                                                            ? speechPaused ? 'Resume' : 'Pause'
                                                            : 'Listen'}
                                                    </span>
                                                </button>
                                                {speakingIndex === index && (
                                                    <button
                                                        type="button"
                                                        className="chatbot-speech-button"
                                                        onClick={stopSpeaking}
                                                        aria-label="Stop speaking"
                                                        title="Stop"
                                                    >
                                                        <Square size={13} />
                                                        <span>Stop</span>
                                                    </button>
                                                )}
                                            </div>
                                        </>
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
                            placeholder={isListening ? 'Listening... speak now' : 'Ask me anything...'}
                            maxLength={1000}
                            disabled={loading}
                            aria-label="Type your message"
                        />

                        <button
                            type="button"
                            className={`chatbot-mic-button ${isListening ? 'is-listening' : ''}`}
                            onClick={toggleVoiceInput}
                            disabled={loading}
                            aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
                            title={isListening ? 'Stop recording' : 'Ask using your voice'}
                        >
                            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                        </button>

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
