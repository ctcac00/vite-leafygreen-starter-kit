import createEmotion from '@emotion/css/create-instance';

function createEmotionInstance() {
  const config = {
    key: 'leafygreen-ui',
    prepend: true,
  };

  return createEmotion(config);
}

const instance = createEmotionInstance();

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
} = instance;

export default instance;
