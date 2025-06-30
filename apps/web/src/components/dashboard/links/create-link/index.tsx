"use client"

import { CreateLinkModal } from './modal-form/modal';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoAdd } from 'react-icons/io5';

const CreateLink: React.FC<{className?: string, splitId: string}> = ({className, splitId}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button className={className} onClick={() => setIsModalOpen(true)}>Novo<IoAdd/></Button>
      <CreateLinkModal splitId={splitId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export {CreateLink};
