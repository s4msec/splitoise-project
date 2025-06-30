interface UploadIconModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface UploadedFile {
  file: File;
  previewUrl: string;
}

interface ProjectForm {
  name: string;
  description: string;
}