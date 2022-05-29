const isDev = process.env.NODE_ENV === 'development' || process.env.FUNCTIONS_EMULATOR;
const projectName = 'myservice';
const projectLocation = 'us-central1';

class URL {
  static ROOT = isDev ? 'http://localhost:3000' : 'URL';
  static FUNCTION = isDev ? `http://localhost:5001/${projectName}/${projectLocation}/api` : `https://${projectLocation}-${projectName}.cloudfunctions.net/api`;
  static KAKAO_USER_ME = 'https://kapi.kakao.com/v2/user/me';
}

export default URL;
