class RegexpUtils {
  // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
  static strictPassword = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식
  static password = /^[A-Za-z0-9]{6,12}$/i;
  static email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  static phone = /^\d{3}-\d{3,4}-\d{4}$/i;

  static isStrictPassword = (str: string) => {
    return RegexpUtils.strictPassword.test(str);
  };
  static isPassword = (str: string) => {
    return RegexpUtils.password.test(str);
  };
  static isEmail = (str: string) => {
    return RegexpUtils.email.test(str);
  };
  static isPhone = (str: string) => {
    return RegexpUtils.phone.test(str);
  };
}
export default RegexpUtils;
