import base64 from 'base-64';

export const encode = code => encodeURIComponent(base64.encode(code));

export const decode = code => base64.decode(decodeURIComponent(code));

export const loader = name => {
  try {
    return require(`../examples/${name}`).default;
  } catch (err) {
    console.error(err);
  }
};
