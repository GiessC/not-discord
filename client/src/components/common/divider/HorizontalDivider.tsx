import './Divider.css';

interface HorizontalDividerProps {
    className?: string;
}

const HorizontalDivider = ({ className = '' }: HorizontalDividerProps) => {
    return (
        <div className={`Divider w-3/4 border-t-2 rounded-sm ${className}`} />
    );
};

export default HorizontalDivider;
