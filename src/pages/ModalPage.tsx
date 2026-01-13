// src/pages/ModalPage.tsx
import { useState } from 'react';
import { Modal } from '../components/molecules/Modal';
import { Button } from '../components/atoms/Button';
import { LoginForm } from '../components/molecules/LoginForm';

export const ModalPage = () => {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Modals</h2>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">1. Basic Text Modal</h3>
        <p className="text-gray-600 text-sm mb-4">Most basic format.</p>
        <Button onClick={() => setIsBasicOpen(true)}>
          Open Notice Modal
        </Button>

        <Modal 
          isOpen={isBasicOpen} 
          onClose={() => setIsBasicOpen(false)} 
          title="Notice"
        >
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Hello! This modal is made using React Portal.<br/>
              Click the background or the X button on the top right to close it.<br/>
              You can also close it by pressing the <strong>ESC</strong> key.
            </p>
            <div className="flex justify-end pt-2">
              <Button size="sm" onClick={() => setIsBasicOpen(false)}>Confirm</Button>
            </div>
          </div>
        </Modal>
      </section>

		<section className="space-y-4">
        <h3 className="text-lg font-semibold">2. Form Modal</h3>
        <p className="text-gray-600 text-sm mb-4">Reused LoginForm component.</p>
        <Button variant="secondary" onClick={() => setIsLoginOpen(true)}>
          Open Login Modal
        </Button>

        <Modal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)} 
          title="Login"
        >
          <LoginForm />
        </Modal>
      </section>

    </div>
  );
};