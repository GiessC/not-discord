import './Divider.css';

interface VerticalDividerProps {
    className?: string;
}

const VerticalDivider = ({ className = '' }: VerticalDividerProps) => {
    return (
        <div className={`Divider border-l-2 h-3/4 rounded-sm ${className}`} />
    );
};

export default VerticalDivider;
