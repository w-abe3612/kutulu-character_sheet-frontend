import { useCallback } from "react";

const ID = "google-recaptcha-v3"
const SITEKEY:string = process.env.reCAPTCHA_ENV ? process.env.reCAPTCHA_ENV:''

export type UseReCaptcha = {
  /**
   * reCAPTCHA の読み込みを非同期で行う
   */
  load: () => void;

  /**
   * reCAPTCHA の読み込みが完了するのを待つ
   */
  ready: () => Promise<ReCaptchaV2.ReCaptcha>;

  /**
   * reCAPTCHA を実行する
   */
  execute: (action: ReCaptchaV2.Action) => Promise<string>;
};

export function useReCaptcha(): UseReCaptcha {
  const load = useCallback(() => {
    if (document.getElementById(ID)) {
      // 既に読み込みが開始されている場合は何もしない
      return;
    }

    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITEKEY}`;
    script.id = ID;
    head.appendChild(script);
  }, []);

  const ready = useCallback(() => {
    return new Promise<ReCaptchaV2.ReCaptcha>((resolve) => {
      load();

      // reCAPTCHA がまだ読み込まれていない場合に ready 関数だけ事前に用意しておく
      // `window.___grecaptcha_cfg.fns` にコールバック関数を push しておくと reCAPTCHA が ready 状態になった時に呼び出してくれる
      // See: https://developers.google.com/recaptcha/docs/loading#loading_recaptcha_asynchronously
      if (typeof window.grecaptcha?.ready === "undefined") {
        // @ts-ignore
        window.grecaptcha = window.grecaptcha || {};
        window.grecaptcha.ready = (cb: () => void) => {
          // @ts-ignore
          window.___grecaptcha_cfg ??= {};
          // @ts-ignore
          window.___grecaptcha_cfg.fns ??= [];
          // @ts-ignore
          window.___grecaptcha_cfg.fns.push(cb);
        };
      }

      window.grecaptcha.ready(() => resolve(window.grecaptcha));
    });
  }, [load]);

  const execute = useCallback(
    async (action: ReCaptchaV2.Action): Promise<string> => {
      const grecaptcha = await ready();
      return grecaptcha.execute(SITEKEY, action);
    },
    [ready]
  );

  return { load, ready, execute };
}