import { ProfileData } from 'src/entities/Profile';
import { Message } from 'src/shared/utils/translationUtils';

export interface ProfileCardState {
  formData: ProfileData;
  isLoading?: boolean;
  isEditable?: boolean;
  error?: Message | null;
}
