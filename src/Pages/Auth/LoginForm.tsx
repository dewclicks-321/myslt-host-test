import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from "../../services/Auth";
import './LoginForm.css';

interface LoginFormProps {
  defaultTab?: 'login' | 'signup';
}

const LoginForm: React.FC<LoginFormProps> = ({ defaultTab = 'login' }) => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(defaultTab);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Login attempt with:', email, password);
  // };

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    setLoading(true);
    const result = await userLogin(event, email, password);
    // Navigate if the login was successful
    setLoading(false);
    if (result.success) {
      navigate("/dashboard");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Signup attempt with:', fullName, email, password, confirmPassword, agreeToTerms);
  };

  const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/forgotpassword');
  };

  // Update the activeTab and URL when tab changes
  const changeTab = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="login-container">

    <div className="login-form-wrapper">
      <div className="login-tabs">
        <button 
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => changeTab('login')}
        >
          Log In
        </button>
        <button 
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => changeTab('signup')}
        >
          Sign Up
        </button>
      </div>
      
      {activeTab === 'login' ? (
        <>
          <h1 className="login-title">
            Log in to your <span className="highlight">MySLT</span>
          </h1>
          <p className="login-subtitle">Welcome to the SLT Portal</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="login-email">Email or Phone number</label>
              <input
                type="text"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone number"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 
                    <i className="fas fa-eye-slash"></i> : 
                    <i className="fas fa-eye"></i>}
                </button>
              </div>
            </div>
            
            <div className="forgot-password">
              <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button active" disabled={loading}>
              {loading ? (
                <span>
                  <i className="fas fa-spinner fa-spin"></i>
                </span>
              ) : (
                "Log in"
              )}
            </button>
            
            <div className="divider">
              <span>OR</span>
            </div>
            
            <div className="social-login">
              <button type="button" className="social-button google">
                <img src="src/assets/google.png" alt="Google" />
              </button>
              <button type="button" className="social-button facebook">
                <img src="src/assets/facebook.png" alt="Facebook" />
              </button>
              <button type="button" className="social-button apple">
                <img src="src/assets/apple.png" alt="Apple" />
              </button>
            </div>
            
            <div className="no-account">
              Don't have an account? <a href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {e.preventDefault(); changeTab('signup')}}>Signup</a>
            </div>
            
            <div className="terms-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Support</a>
              <a href="#">Customer Care</a>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className="login-title">
            Create an <span className="highlight">account</span>
          </h1>
          
          <form onSubmit={handleSignupSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="signup-email">Email / Phone number</label>
              <input
                type="text"
                id="signup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone number"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="signup-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 
                    <i className="fas fa-eye-slash"></i> : 
                    <i className="fas fa-eye"></i>}
                </button>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? 
                    <i className="fas fa-eye-slash"></i> : 
                    <i className="fas fa-eye"></i>}
                </button>
              </div>
            </div>
            
            <div className="form-group terms-checkbox">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                <span className="terms-text">
                  I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
                </span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className={`login-button ${agreeToTerms ? 'active' : ''}`}
              disabled={!agreeToTerms}
            >
              Sign up
            </button>
            
            <div className="already-account">
              Already got an account? <a href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {e.preventDefault(); changeTab('login')}}>Login</a>
            </div>
            
            <div className="divider">
              <span>Or sign in with</span>
            </div>
            
            <div className="social-login">
              <button type="button" className="social-button google">
                <img src="src/assets/google.png" alt="Google" />
              </button>
              <button type="button" className="social-button facebook">
                <img src="src/assets/facebook.png" alt="Facebook" />
              </button>
              <button type="button" className="social-button apple">
                <img src="src/assets/apple.png" alt="Apple" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
    </div>
  );
};

export default LoginForm;