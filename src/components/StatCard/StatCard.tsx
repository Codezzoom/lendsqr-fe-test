import type { LucideIcon } from "lucide-react";
import './StatCard.scss'

interface StatCardProps {
  title: string;
  className: string;
  value: string;
  icon: LucideIcon;
}

const StatCard = ({
  title,
  className,
  value,
  icon: Icon,
}: StatCardProps) => {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${className}`}>
        <Icon size={20} />
      </div>

      <p>{title}</p>

      <h2>{value}</h2>
    </article>
  );
};

export default StatCard;

