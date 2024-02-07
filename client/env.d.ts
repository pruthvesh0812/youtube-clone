declare global{
    namespace NodeJS{
        interface ProcessEnv{
            PROJECT_ID:string;
            CLIENT_EMAIL:string;
            PRIVATE_KEY:string;
            BUCKET_NAME:string;
        }
}
}

export{}