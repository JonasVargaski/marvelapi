function getEnvironmentVariable(name) {
  const value = process.env[name];
  if (!value)
    throw new Error(`The environment variable ${name} has not been filled`);
  return value;
}

const env = {
  marvel_public_key: getEnvironmentVariable("REACT_APP_MARVEL_PUBLIC_KEY"),
  marvel_private_key: getEnvironmentVariable("REACT_APP_MARVEL_PRIVATE_KEY"),
  marvel_baseurl: getEnvironmentVariable("REACT_APP_MARVEL_BASEURL"),
};

export default env;
