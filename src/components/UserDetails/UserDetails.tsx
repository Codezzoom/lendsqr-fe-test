import { ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.scss";

const UserDetails = () => {
  const navigate = useNavigate();

  return (
    <section className="user-details-page">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        <ArrowLeft size={18} />
        Back to Users
      </button>

      <div className="page-top">
        <h1>User Details</h1>

        <div className="top-actions">
          <button className="blacklist-button">BLACKLIST USER</button>
          <button className="activate-button">ACTIVATE USER</button>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-summary">
          <div className="avatar-circle">
            <User size={40} />
          </div>

          <div className="profile-name">
            <h2>Grace Effiom</h2>
            <p>LSQFf587g90</p>
          </div>

          <div className="tier">
            <p>User’s Tier</p>
            <span>★☆☆</span>
          </div>

          <div className="account">
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className="tabs">
          <button className="active-tab">General Details</button>
          <button>Documents</button>
          <button>Bank Details</button>
          <button>Loans</button>
          <button>Savings</button>
          <button>App and System</button>
        </div>
      </div>

      <div className="details-card">
        <DetailSection
          title="Personal Information"
          items={[
            ["FULL NAME", "Grace Effiom"],
            ["PHONE NUMBER", "07060780922"],
            ["EMAIL ADDRESS", "grace@gmail.com"],
            ["BVN", "07060780922"],
            ["GENDER", "Female"],
            ["MARITAL STATUS", "Single"],
            ["CHILDREN", "None"],
            ["TYPE OF RESIDENCE", "Parent’s Apartment"],
          ]}
        />

        <DetailSection
          title="Education and Employment"
          items={[
            ["LEVEL OF EDUCATION", "B.Sc"],
            ["EMPLOYMENT STATUS", "Employed"],
            ["SECTOR OF EMPLOYMENT", "FinTech"],
            ["DURATION OF EMPLOYMENT", "2 years"],
            ["OFFICE EMAIL", "grace@lendsqr.com"],
            ["MONTHLY INCOME", "₦200,000.00- ₦400,000.00"],
            ["LOAN REPAYMENT", "40,000"],
          ]}
        />

        <DetailSection
          title="Socials"
          items={[
            ["TWITTER", "@grace_effiom"],
            ["FACEBOOK", "Grace Effiom"],
            ["INSTAGRAM", "@grace_effiom"],
          ]}
        />

        <DetailSection
          title="Guarantor"
          items={[
            ["FULL NAME", "Debby Ogana"],
            ["PHONE NUMBER", "07060780922"],
            ["EMAIL ADDRESS", "debby@gmail.com"],
            ["RELATIONSHIP", "Sister"],
          ]}
        />
      </div>
    </section>
  );
};

interface DetailSectionProps {
  title: string;
  items: string[][];
}

const DetailSection = ({ title, items }: DetailSectionProps) => {
  return (
    <section className="detail-section">
      <h3>{title}</h3>

      <div className="details-grid">
        {items.map(([label, value]) => (
          <div className="detail-item" key={label}>
            <p>{label}</p>
            <h4>{value}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserDetails;