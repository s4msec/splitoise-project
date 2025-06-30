import NextImage from "next/image";
import { UploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

interface UploadedCountryIcon {
  file: File;
}

const UploadImage: React.FC<{ value: UploadedCountryIcon | null; onChange: (file: UploadedCountryIcon | null) => void }> = ({ value, onChange }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value?.file) {
      const objectUrl = URL.createObjectURL(value.file);
      setImageSrc(objectUrl);
      return () => URL.revokeObjectURL(objectUrl); // Cleanup old URL
    } else {
      setImageSrc(null);
    }
  }, [value]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;

    const file = event.target.files[0];
    onChange({ file });

    // Reset input to allow reselecting the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className="relative w-[100px] h-[100px] border border-dashed border-gray-400 rounded-lg flex items-center justify-center hover:border-blue-500 cursor-pointer transition-all"
      onClick={handleClick} // Trigger file input click
    >
      {!imageSrc ? (
        <label className="absolute inset-0 flex items-center justify-center text-sm cursor-pointer hover:text-blue-500 transition-all">
          <UploadIcon className="w-6 h-6" />
        </label>
      ) : (
        <div className="w-[85px] h-[85px] flex justify-center items-center">
          <NextImage
            width={85}
            height={85}
            src={imageSrc}
            alt="Icon Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <Input
        ref={fileInputRef}
        id="icon"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export { UploadImage };
