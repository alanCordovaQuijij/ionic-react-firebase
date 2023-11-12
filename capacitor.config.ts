import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'chat.ionic.react.firebase',
  appName: 'chat-ionic-react-firebase',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
