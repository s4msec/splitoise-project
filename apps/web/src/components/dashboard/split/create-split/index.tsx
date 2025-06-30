"use client"

import { CreateSplitModal } from './modal-form/modal';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoAdd } from 'react-icons/io5';

const CreateSplit: React.FC<{splitterId: number}> = ({splitterId}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Novo<IoAdd/></Button>
      <CreateSplitModal splitterId={splitterId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export {CreateSplit};
