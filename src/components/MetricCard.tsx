import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
    title: string;
    value: string | number;
    change?: string;
    icon: LucideIcon;
    color: string;
}

export default function MetricCard({ title, value, change, icon: Icon, color }: MetricCardProps) {
    return (
        <div className="glass-card p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</span>
                <div className={`p-2 rounded-lg bg-opacity-10`} style={{ backgroundColor: `${color}1A`, color: color }}>
                    <Icon size={20} />
                </div>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
                {change && (
                    <span className={`text-xs font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {change}
                    </span>
                )}
            </div>
        </div>
    );
}
