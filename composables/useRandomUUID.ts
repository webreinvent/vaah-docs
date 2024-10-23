import { v4 as uuidv4 } from 'uuid';
export const useRandomUUID = (): string => {
  return uuidv4();
};
