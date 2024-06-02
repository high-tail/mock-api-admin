import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box } from '@mui/material';

interface FlashProps {
    statusCode: number;
    message: string;
    setFlashMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlashPage: React.FC<FlashProps> = ({ statusCode, message, setFlashMessage }: FlashProps) => {
    return (
        <>
            {statusCode === 200 && <Alert severity="success" sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
            }}>Update {message} Success! <IconButton onClick={() => setFlashMessage(false)}><CloseIcon /></IconButton></Alert>}
            {statusCode !== 200 && <Alert severity="error" sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
            }}>Update {message} Failed! <IconButton onClick={() => setFlashMessage(false)}><CloseIcon /></IconButton></Alert>}
        </>
    );
}

export default FlashPage