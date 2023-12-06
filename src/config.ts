import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    URL: process.env.URL,
    BASE_DATOS: process.env.BASE_DATOS,
  };
});
