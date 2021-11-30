import { useRouter } from "next/router";

export const useUserOnPage = (pageHref: string) => {
    const router = useRouter();

    return router.pathname === pageHref;
};
