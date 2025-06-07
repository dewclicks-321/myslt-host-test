import React, { ReactNode } from 'react';
import Navbar from '../Pages/Auth/Navbar';
import VideoBackground from '../Pages/Auth/VideoBackground';
import '../../src/App.css';

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="app">
      <VideoBackground />
      <div className="content-container">
        <div className="main-content">
          <div className="left-side">
            <Navbar />
            <div className="tagline">
              <h2>Stay connected with ease. Download the SLT app today!</h2>
              <div className="app-buttons">
                <a href="#" className="app-button ios">
                  <img src="src/assets/app-store.png" alt="Download on the App Store" />
                </a>
                <a href="#" className="app-button android">
                  <img src="src/assets/google-play.png" alt="Get it on Google Play" />
                </a>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;