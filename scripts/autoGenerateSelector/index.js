/* 
brief: first argument is relative path to folder named selectors,
 second argument is part of redux slice (ex: state.profile.username) 
*/

import fs from 'fs';

function autoGenerateSelectors(selectorsFolderPath, slicePart) {
  const splitSlice = slicePart.split('.');
  const sliceName = splitSlice[0];
  const capSliceName = sliceName.charAt(0).toUpperCase() + sliceName.slice(1);
  const fieldName = splitSlice[splitSlice.length - 1];
  const capFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  const selector = `select${capSliceName}${capFieldName}`;

  if (fs.existsSync(selectorsFolderPath)) {
    const selectorFolder = `${selectorsFolderPath}/${selector}`;

    fs.mkdir(selectorFolder, (e) => {
      console.log(e);
    });

    const data = `
      import { GlobalState } from 'src/app/providers/StoreProvider';

      export const ${selector} = (state: GlobalState) => state.${slicePart};

    `;

    fs.writeFile(`${selectorFolder}/${selector}.ts`, data, {}, (e) => {
      console.log(e);
    });

    const testData = `
      import { ${selector} } from './${selector}';

      import { GlobalState } from 'src/app/providers/StoreProvider';

      describe('test ${selector}.test', () => {
        test('test return value', () => {
          const state: DeepPartial<GlobalState> = {  };

          expect(${selector}(state as GlobalState)).toEqual();
        });
      });


    `;

    fs.writeFile(`${selectorFolder}/${selector}.test.ts`, testData, {}, (e) => {
      console.log(e);
    });

    return;
  }

  fs.rmSync(selectorsFolderPath, { recursive: true, force: true });

  autoGenerateSelectors(selectorsFolderPath, slicePart);
}

const args = process.argv?.slice(2) || [];

autoGenerateSelectors(...args);
