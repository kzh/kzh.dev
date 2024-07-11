import { defineConfig } from "cf/config";

export default defineConfig(({ mode }) => {
  const staging = mode === "staging";

  return {
    accountId: "148703b03a593ee1fc689dd049b8ff4f",
    worker: {
      name: staging ? "kzh-dev-staging" : "kzh-dev",
      compatibilityDate: "2026-09-25",
      domains: staging ? ["staging.kzh.dev"] : ["kzh.dev"],
      observability: {
        enabled: true,
      },
      assets: {
        notFoundHandling: "single-page-application",
      },
    },
  };
});
