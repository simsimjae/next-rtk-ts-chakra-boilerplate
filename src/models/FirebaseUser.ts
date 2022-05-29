class FirebaseUser {
  uid?: string;
  email?: string;
  emailVerified?: boolean;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
  disabled?: boolean;
  metadata?: {
    creationTime?: string;
    lastSignInTime?: string | null;
    lastRefreshTime?: string | null;
  };
  providerData?: any[];
  passwordHash?: string;
  passwordSalt?: string;
  tokensValidAfterTime?: string;
  tenantId?: string | null;
}

export default FirebaseUser;
