import crypto from 'crypto';

const hashPassword = (password: string, secretKey: string) => {
    return crypto
      .createHmac('sha256', secretKey)
      .update(password)
      .digest('hex');
  }
  
  export {hashPassword};