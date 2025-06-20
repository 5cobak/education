import { DeepPartial } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/providers/StoreProvider';

export const useSelectorCounter = () => {
  return useSelector((state: DeepPartial<RootState>) => state.counter);
};
