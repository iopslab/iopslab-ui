import { App } from 'vue';

declare global {
  interface Window {
    VITE_APP_API_BASE_URL?: string;
    VUE_APP_INIT_UMENG?: string;
    VUE_APP_INIT_BAIDU_TONGJI?: string;
    threeJSApp?: any;
    initCanvas?: () => void;
    disposeCanvas?: () => void;
    _hmt?: Array;
    'vue3-sfc-loader'?: { loadModule };
    aplus_queue: { action: string; arguments: any[] }[];
    _app?: App;
    _t?: (path: string, args?: any) => string;
    _tc?: (path: string, c: number, args?: any) => string;
    _tp?: (pluginName: string, path: string) => string;
    SimpleMDE: any;
  }
}
