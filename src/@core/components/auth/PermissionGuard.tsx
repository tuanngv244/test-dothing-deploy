import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { AbilityContext } from "@/@core/acl/Can";
import { buildAbilityFor } from "@/infra/configs/acl";
import { useAuth } from "@/infra/hooks/useAuth";

import Page401 from "@/views/assets/pages/401";
import BlankLayout from "@/infra/layouts/BlankLayout";

type PermissionGuardProps = {
  aclAbilities?: any;
  children?: ReactNode;
  guestGuard?: any;
};

const PermissionGuard = (props: PermissionGuardProps) => {
  const { aclAbilities, children, guestGuard } = props;
  const [ability, setAbility] = useState<any>(undefined);
  const auth = useAuth();
  const router = useRouter();

  // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
  if (
    guestGuard ||
    router.route === "/404" ||
    router.route === "/500" ||
    router.route === "/"
  ) {
    return <>{children}</>;
  }

  // User is logged in, build ability for the user based on his role
  if (auth.user && auth.user?.role && !ability) {
    setAbility(buildAbilityFor(auth.user.role, aclAbilities.feature));
  }

  // Check the access of current user and render pages
  if (ability && ability.can(aclAbilities.action, aclAbilities.feature)) {
    return (
      <AbilityContext.Provider value={ability}>
        {children}
      </AbilityContext.Provider>
    );
  }

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <Page401 />
    </BlankLayout>
  );
};

export default PermissionGuard;
