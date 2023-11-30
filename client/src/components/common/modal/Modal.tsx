import './Modal.css';

type ModalType = 'info' | 'success' | 'alert' | 'confirm';

export interface ModalProps {
    type?: ModalType;
    title: string;
    buttonText?: string;
    children: React.ReactNode;
}

const Modal = ({
    type = 'info',
    title,
    buttonText = 'Confirm',
    children,
}: ModalProps) => {
    return (
        <>
            <div className='fixed w-full h-full bg-black/30' />
            <div className='Modal fixed flex z-50'>
                <div className='Body flex'>
                    <div className='Icon'>{/* TODO: Add Icons */}</div>
                    <div className='flex'>
                        <div className='Title'>
                            <h3 className='text-lg font-bold'>{title}</h3>
                        </div>
                        <div className='Content'>{children}</div>
                    </div>
                </div>
                <div className='Footer flex'>
                    {type === 'info' ? (
                        <button className='border-slate-600 border-2 bg-white'>
                            {buttonText}
                        </button>
                    ) : type === 'success' ? (
                        <button className='bg-sky-700'>{buttonText}</button>
                    ) : type === 'alert' ? (
                        <>
                            <button className='border-slate-600 border-2 bg-white'>
                                Cancel
                            </button>
                            <button className='bg-red-700'>{buttonText}</button>
                        </>
                    ) : type === 'confirm' ? (
                        <>
                            <button className='border-slate-600 border-2 bg-white'>
                                Cancel
                            </button>
                            <button className='bg-sky-700'>{buttonText}</button>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Modal;
