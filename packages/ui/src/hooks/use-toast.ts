import { toast } from "sonner";

export const useToast = (): { toast: typeof toast } => {
  return {
    toast,
  };
};
