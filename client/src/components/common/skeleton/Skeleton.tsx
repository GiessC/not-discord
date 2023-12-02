import './Skeleton.css';

interface SkeletonProps {
    className?: string;
    children?: React.ReactNode;
}

const Skeleton = ({ className = '', children }: SkeletonProps) => {
    return <div className={`Skeleton ${className}`}>{children}</div>;
};

export default Skeleton;
