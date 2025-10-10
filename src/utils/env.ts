export interface AppEnv {
  env: string;
  baseUrl: string;
  apiPrefix: string;
  title: string;
}

export const appEnv: AppEnv = {
  env: import.meta.env.VITE_APP_ENV || 'development',
  baseUrl: import.meta.env.VITE_APP_BASE_URL || 'http://localhost:3000/api',
  apiPrefix: import.meta.env.VITE_APP_API_PREFIX || '/api',
  title: import.meta.env.VITE_APP_TITLE || 'Test App',
};

// 开发环境
export const isDev = appEnv.env === 'development';

// 测试环境
export const isTest = appEnv.env === 'test';

// 沙盒环境
export const isPreview = appEnv.env === 'preview';

// 生产环境
export const isProd = appEnv.env === 'production';