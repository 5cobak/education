
      import { selectProfileCardFormData } from './selectProfileCardFormData';

      import { GlobalState } from 'src/app/providers/StoreProvider';

      describe('test selectProfileCardFormData.test', () => {
        test('test return value', () => {
          const state: DeepPartial<GlobalState> = { profileCard: {formData: {
            firstName: 'isma',
            lastName: 'arslanov',
            city: 'Kazan'
          }} };

          expect(selectProfileCardFormData(state as GlobalState)).toEqual({
            firstName: 'isma',
            lastName: 'arslanov',
            city: 'Kazan'
          });
        });
      });


    