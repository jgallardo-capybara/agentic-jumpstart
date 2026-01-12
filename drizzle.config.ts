import { defineConfig } from "drizzle-kit";
import { privateEnv } from "./src/config/privateEnv";

export default defineConfig({
  schema: ["./src/db/schema.ts", "./src/db/auth-schema.ts"],
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: privateEnv.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
