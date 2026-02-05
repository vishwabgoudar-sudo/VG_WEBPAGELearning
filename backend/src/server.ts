import { app } from './app';
import { envConfig } from './config/env';

app.listen(envConfig.port, () => {
  // eslint-disable-next-line no-console
  console.log(`VG Learning backend running on http://localhost:${envConfig.port}`);
});
