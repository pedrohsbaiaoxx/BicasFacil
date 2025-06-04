import React from 'react';
import { Button } from '../../components/ui/button';
import { useLocation } from 'wouter';

export function AuthButtons() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => setLocation('/login')}>
        Entrar
      </Button>
    </div>
  );
} 