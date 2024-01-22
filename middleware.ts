import { chain } from "@/middlewares/chain";
import { withI18nMiddleware } from "@/middlewares/i18n/middleware";
import { withAuthMiddleware } from "@/middlewares/auth/middleware";

export default chain([withAuthMiddleware, withI18nMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
