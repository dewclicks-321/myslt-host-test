import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import '../../i18n/i18n';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSelector from '../../components/LanguageSelector';

const HomePage: React.FC = () => {
    const [showChatMessage, setShowChatMessage] = useState<boolean>(false);
    const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);
    const [platformAnimationCompleted, setPlatformAnimationCompleted] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const navigate = useNavigate();
  
    useEffect(() => {
        const timer = setTimeout(() => setAnimationCompleted(true), 100);
        const platformTimer = setTimeout(() => setPlatformAnimationCompleted(true), 4500);
        return () => {
            clearTimeout(timer);
            clearTimeout(platformTimer);
        };
    }, []);
  
    const handleMouseEnter = () => setShowChatMessage(true);
    const handleMouseLeave = () => setShowChatMessage(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const toggleVideoPlayback = () => {
        if (videoRef.current) {
            if (isVideoPaused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsVideoPaused(!isVideoPaused);
        }
    };

    const navigateToDashboard = () => navigate('/dashboard/broadband/summary');

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [mobileMenuOpen]);

    return (
        <div className="homepage-container">
            <nav className={`main-nav ${platformAnimationCompleted ? 'fade-in-element' : 'hidden-element'}`}> 
                <div className="nav-left">
                    <button 
                        className={`menu-button ${mobileMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMobileMenu} 
                        aria-label="Toggle mobile menu">
                        <span className="menu-icon"></span>
                    </button>
                </div>
                <div className={`nav-center ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
                    <a href="#">About Us</a>
                    <a href="#">Coverage Map</a>
                    <a href="#">Support</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="nav-right">
                    <div className="language-selector-container">
                        <LanguageSelector />
                    </div>
                    <Link to="/login" className="auth-button login-btn">Log in</Link>
                    <Link to="/signup" className="auth-button signup-btn">Sign up</Link>
                </div>
            </nav>
            
            <div className={`main-content`}>
                <div className={`slt-logo ${animationCompleted ? 'animate-logo' : ''}`}>
                    <img src="/slt-mobitel-logo.svg" alt="SLT MOBITEL" className="logo-image" />
                </div>
                
                <div className={`marketing-message top-message ${platformAnimationCompleted ? 'fade-in-element' : 'hidden-element'}`}>
                    <p>Experience seamless communication and cutting-edge technology designed for your digital life.</p>
                </div>
                
                <div className={`marketing-message bottom-message ${platformAnimationCompleted ? 'fade-in-element' : 'hidden-element'}`}>
                    <p>Effortless connectivity, limitless possibilities.</p>
                </div>
                
                <div className={`fiber-mascot ${animationCompleted ? 'animate-mascot' : ''}`}>
                    <img src="/fiber-mascot.png" alt="FibreOn Mascot" className="mascot-image" />
                    <img src="/platform-circle.png" alt="Platform" className={`mascot-platform ${animationCompleted ? 'animate-platform' : ''}`} />
                </div>
                
                <div className={`next-button ${platformAnimationCompleted ? 'fade-in-element' : 'hidden-element'}`}>
                    <button className="circle-btn" onClick={navigateToDashboard}>
                        <span className="arrow-icon">›</span>
                    </button>
                </div>
                
                <div className={`promo-video ${platformAnimationCompleted ? 'fade-in-element' : 'hidden-element'}`}>
                    <video ref={videoRef} autoPlay loop muted onClick={toggleVideoPlayback}>
                        <source src="/promo-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Video Controls Overlay */}
                    <div className={`video-controls-overlay ${isVideoPaused ? 'visible' : ''}`}>
                        <div className="video-controls-container">
                            <div className="playback-controls">
                                <button 
                                    className="playback-button" 
                                    onClick={toggleVideoPlayback}
                                    aria-label={isVideoPaused ? "Play video" : "Pause video"}
                                >
                                    {isVideoPaused ? "▶" : "⏸"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`chatbot-container ${platformAnimationCompleted ? 'fade-in-element' : 'hidden-element'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="chatbot-icon">
                    <video autoPlay loop muted>
                        <source src="/chatbot-icon.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {showChatMessage && (
                    <div className="chat-message">
                        <p>Hello! How can I help you today?</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
