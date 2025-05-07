interface ImportMetaEnv {
    readonly VITE_GOOGLE_APP_SCRIPT_URL: string;
    readonly VITE_GOOGLE_APP_SCRIPT_ID: string;
    readonly VITE_GOOGLE_SHEET_ID: string;
    readonly VITE_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}