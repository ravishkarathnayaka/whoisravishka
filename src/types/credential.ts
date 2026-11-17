export type CredentialCategory = 'security' | 'cloud' | 'data' | 'academic';

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: CredentialCategory;
  credentialId?: string;
  verificationUrl: string;
  badgeUrl?: string;
}
