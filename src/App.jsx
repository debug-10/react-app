import "./App.css";
import avatarLogo from "./assets/avatar.svg";

function App() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={avatarLogo} className="avatar" alt="个人头像" />
        <h1 className="name">张三</h1>
        <p className="title">前端开发工程师</p>
      </div>

      <div className="profile-content">
        <div className="info-section">
          <h2>关于我</h2>
          <p>
            热爱编程，专注于React和前端技术栈开发。拥有5年工作经验，擅长构建用户友好的web应用。
          </p>
        </div>

        <div className="info-section">
          <h2>联系方式</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>email@example.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>138-8888-8888</span>
            </div>
            <div className="contact-item">
              <span className="icon">🔗</span>
              <span>github.com/yourname</span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>技能专长</h2>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML/CSS</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">UI/UX</span>
          </div>
        </div>
      </div>

      <footer className="profile-footer">
        <p>© 2024 个人名片 - 欢迎联系</p>
      </footer>
    </div>
  );
}

export default App;
