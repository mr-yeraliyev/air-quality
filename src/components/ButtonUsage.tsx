import Button from '@mui/material/Button';
import { ReactNode } from 'react';

interface IButtonUsageProps{
    children: ReactNode
    onClick: () => void
}
export default function ButtonUsage({ children, onClick } : IButtonUsageProps) {
  return <Button variant="contained" onClick={onClick} >
    {children}
  </Button>;
}