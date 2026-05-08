import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/icons/mainLogo.png";
import "./doc.css";

function DochomePage() {
  const [isOpen, setIsOpen] = useState(true);
  const [doctorName] = useState("Shelmark");
  const navigate = useNavigate();

  return (
    <div className="layout">
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "‹" : "›"}
        </button>

        <div className="brand-container">
          <img src={mainLogo} alt="logo" className="logo-img" />
          {isOpen && <span className="brand-text">HealTrack</span>}
        </div>

        <nav className="menu">
          <MenuItem icon="🏠" label="Homepage" isOpen={isOpen} active />
          <MenuItem icon="👥" label="Staff" isOpen={isOpen} />

          <div className="menu-line"></div>

          <MenuItem icon="🧍" label="Patients" isOpen={isOpen} />
          <MenuItem icon="👨‍⚕️" label="Doctor" isOpen={isOpen} />
          <MenuItem icon="🔬" label="Laboratory" isOpen={isOpen} />
          <MenuItem icon="💊" label="Pharmacy" isOpen={isOpen} />
          <MenuItem icon="📋" label="Records" isOpen={isOpen} />
        </nav>

        <div className="logout-section">
          <button className="logout-btn" onClick={() => navigate("/")}>
            🚪 {isOpen && "Sign Out"}
          </button>
        </div>
      </aside>

      <main className="main-content">
        <div className="left-area">
          <div className="greeting-card">
            Good Day, Dr. {doctorName}!
          </div>

          <div className="stats-grid">
            <StatCard icon="👤" title="Patients" value="221" />
            <StatCard icon="🛏️" title="Available Beds" value="124" />
            <StatCard icon="👨‍⚕️" title="Available Nurses" value="128" />
            <StatCard icon="₱" title="Monthly Revenue" value="362,174" small />
          </div>
        </div>

        <div className="date-column">
          <DateCard />
          <DateCard />
        </div>

        <div className="right-area">
          <div className="profile-row">
            <div className="bell-box">🔔</div>

            <div className="doctor-info">
              <h3>Doctor Shelmark</h3>
              <p>raymarkdelgado@gmail.com</p>
            </div>

            <div className="avatar"></div>
          </div>

          <div className="announcement-panel">
            <div className="announcement-header">
              <span>ANNOUNCEMENTS</span>
              <span>•••</span>
            </div>

            <Announcement
              icon="⚙️"
              title="Memorandum (00-00)"
              text="Updated Patient Care ...."
            />

            <Announcement
              icon="💳"
              title="Billing"
              text="[Unpaid Bills]"
            />

            <Announcement
              icon="🔬"
              title="Laboratory"
              text="[Pending Lab Results]"
            />
          </div>
        </div>

        <h2 className="reports-title">Reports and Analytics</h2>

        <div className="reports-grid">
          <div className="chart-card revenue-chart">
            <div className="chart-legend">● Revenue</div>

            <HorizontalBar label="Jan" width="62%" />
            <HorizontalBar label="Feb" width="78%" />
            <HorizontalBar label="March" width="90%" />
            <HorizontalBar label="April" width="34%" />
          </div>

          <div className="chart-card bed-chart">
            <div className="chart-legend">● Bed Occupancy</div>

            <HorizontalBar label="ICU" width="38%" />
            <HorizontalBar label="Pediatrics" width="48%" />
            <HorizontalBar label="OB-GYN" width="53%" />
            <HorizontalBar label="General" width="20%" />
          </div>

          <div className="rating-card">
            <h3>Hospital Rating</h3>

            <div className="rating-circle">
              <span>67%</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function MenuItem({ icon, label, isOpen, active }) {
  return (
    <div className={`menu-item ${active ? "active" : ""}`}>
      <span className="menu-icon">{icon}</span>
      {isOpen && <span>{label}</span>}
    </div>
  );
}

function StatCard({ icon, title, value, small }) {
  return (
    <div className="stat-card">
      <p>{title}</p>

      <div className="stat-content">
        <span className="stat-icon">{icon}</span>
        <h2 className={small ? "small-number" : ""}>{value}</h2>
      </div>
    </div>
  );
}

function DateCard() {
  return (
    <div className="date-card">
      <p>2026</p>
      <p>APRIL</p>
      <h2>22</h2>
      <h4>Therapy</h4>
    </div>
  );
}

function Announcement({ icon, title, text }) {
  return (
    <div className="announcement-item">
      <div className="announcement-icon">{icon}</div>

      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function HorizontalBar({ label, width }) {
  return (
    <div className="bar-row">
      <span>{label}</span>

      <div className="bar-track">
        <div className="bar-fill" style={{ width }}></div>
      </div>
    </div>
  );
}

export default DochomePage;