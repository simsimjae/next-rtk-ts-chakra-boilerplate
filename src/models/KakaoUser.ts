class KakaoUser {
  id?: string;
  kakao_account?: {
    profile_needs_agreement: boolean;
    profile: {
      nickname: string;
      thumbnail_image_url: string;
      profile_image_url: string;
    };
    email_needs_agreement: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    email: string;
    age_range_needs_agreement: boolean;
    age_range: string;
    birthday_needs_agreement: boolean;
    birthday: string;
    gender_needs_agreement: boolean;
    gender: 'male' | 'female';
  };
  properties?: {
    nickname: string;
    thumbnail_image: string;
    profile_image: string;
    custom_field1: string;
    custom_field2: string;
  };
}
export default KakaoUser;
