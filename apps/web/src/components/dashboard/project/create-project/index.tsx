"use client"

import { CreateProjectModal } from './modal-form/modal';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoAdd } from 'react-icons/io5';

const CreateProject: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Novo<IoAdd/></Button>
      <CreateProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export {CreateProject};
