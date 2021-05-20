declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;  
      DB_URL: string;
      AUTH_GOOGLE_CLIENT_ID: string;
      AUTH_GOOGLE_CLIENT_SECRET: string;
      AUTH_GITHUB_CLIENT_ID: string;
      AUTH_GITHUB_CLIENT_SECERT: string;
      NEXTAUTH_URL: string;
      BASE_URl: string;
      PORT?: string;
      PWD: string;
    }
  }
}


export {}
