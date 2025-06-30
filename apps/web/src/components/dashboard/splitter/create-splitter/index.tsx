"use client"

import { CreateSplitterModal } from './modal-form/modal';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoAdd } from 'react-icons/io5';

const CreateSplitter: React.FC<{projectId: string}> = ({projectId}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Novo<IoAdd/></Button>
      <CreateSplitterModal projectId={projectId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export {CreateSplitter};
