import ServerButton from './ServerButton';

interface DMButtonProps {
    className?: string;
    buttonId: number;
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    hasMessage?: boolean;
}

const DMButton = ({
    className = '',
    buttonId,
    selected,
    setSelected,
    hasMessage = false,
}: DMButtonProps) => {
    return (
        <ServerButton
            className={className}
            buttonId={buttonId}
            selected={selected}
            setSelected={setSelected}
            hasMessage={hasMessage}
        />
    );
};

export default DMButton;
