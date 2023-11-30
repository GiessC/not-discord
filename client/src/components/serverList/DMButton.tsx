import ServerButton from './ServerButton';

interface DMButtonProps {
    buttonId: number;
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    hasMessage?: boolean;
}

const DMButton = ({
    buttonId,
    selected,
    setSelected,
    hasMessage = false,
}: DMButtonProps) => {
    return (
        <ServerButton
            buttonId={buttonId}
            selected={selected}
            setSelected={setSelected}
            hasMessage={hasMessage}
        />
    );
};

export default DMButton;
