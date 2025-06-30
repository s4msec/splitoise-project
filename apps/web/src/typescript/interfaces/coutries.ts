interface UploadCountryIconModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface UploadedCountryIcon {
    file: File;
}

interface CountryForm {
    name: string;
    redirectMessage: string;
}