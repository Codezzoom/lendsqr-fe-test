import { useState } from "react";
import { ArrowLeft, User as UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types/user";
import "./UserDetails.scss";

const getSavedUser = (): User | null => {
  const savedUser = localStorage.getItem("selectedUser");

  if (!savedUser) {
    return null;
  }

  try {
    return JSON.parse(savedUser) as User;
  } catch {
    return null;
  }
};

const UserDetails = () => {
  const navigate = useNavigate();
  const [user] = useState<User | null>(() => getSavedUser());

  if (!user) {
    return (
      <section className="user-details-page">
        <button className="back-button" onClick={() => navigate("/dashboard")}>
          <ArrowLeft size={18} />
          Back to Users
        </button>

        <p>No user details found.</p>
      </section>
    );
  }

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
            <UserIcon size={40} />
          </div>

          <div className="profile-name">
            <h2>{user.fullName}</h2>
            <p>{user.id}</p>
          </div>

          <div className="tier">
            <p>User’s Tier</p>
            <span>★☆☆</span>
          </div>

          <div className="account">
            <h2>{user.accountBalance}</h2>
            <p>
              {user.accountNumber}/{user.bankName}
            </p>
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
            ["FULL NAME", user.fullName],
            ["PHONE NUMBER", user.phoneNumber],
            ["EMAIL ADDRESS", user.email],
            ["BVN", user.bvn],
            ["GENDER", user.gender],
            ["MARITAL STATUS", user.maritalStatus],
            ["CHILDREN", user.children],
            ["TYPE OF RESIDENCE", user.typeOfResidence],
          ]}
        />

        <DetailSection
          title="Education and Employment"
          items={[
            ["LEVEL OF EDUCATION", user.education],
            ["EMPLOYMENT STATUS", user.employmentStatus],
            ["SECTOR OF EMPLOYMENT", user.sector],
            ["DURATION OF EMPLOYMENT", user.durationOfEmployment],
            ["OFFICE EMAIL", user.officeEmail],
            ["MONTHLY INCOME", user.monthlyIncome],
            ["LOAN REPAYMENT", user.loanRepayment],
          ]}
        />

        <DetailSection
          title="Socials"
          items={[
            ["TWITTER", user.twitter],
            ["FACEBOOK", user.facebook],
            ["INSTAGRAM", user.instagram],
          ]}
        />

        <DetailSection
          title="Guarantor"
          items={[
            ["FULL NAME", user.guarantorName],
            ["PHONE NUMBER", user.guarantorPhone],
            ["EMAIL ADDRESS", user.guarantorEmail],
            ["RELATIONSHIP", user.guarantorRelationship],
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