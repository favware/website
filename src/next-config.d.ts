declare module 'next-pwa' {
  interface NextPwaOptions extends Record<string, unknown> {
    pwa: {
      dest: string;
      disable?: boolean;
      register?: boolean;
      scope?: string;
      sw?: string;
      runtimeCaching?: unknown;
      publixExcludes?: string[];
      precached?: string[];
      subdomainPrefix?: string;
    };
  }

  function withPWA(options: NextPwaOptions): void;

  export = withPWA;
}
