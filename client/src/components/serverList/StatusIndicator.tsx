interface StatusIndicatorProps {
    children?: React.ReactNode;
}

const StatusIndicator = ({ children }: StatusIndicatorProps) => {
    return (
        <div className='flex w-full'>
            <div className='StatusIndicator rounded fixed top-7 bg-white w-1 h-2 ' />
            <div className='flex mx-auto justify-center'>{children}</div>
        </div>
    );
};

export default StatusIndicator;
