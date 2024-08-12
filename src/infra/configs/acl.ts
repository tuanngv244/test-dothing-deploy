import { AbilityBuilder, createMongoAbility } from "@casl/ability";

export const AppAbility = createMongoAbility;

const defineRulesFor = (role: any, feature: any) => {
  const { can, cannot, build, rules } = new AbilityBuilder(createMongoAbility);

  if (role === "admin") {
    can("manage", "all");
  } else if (role === "client" || role === "guest") {
    can(["read"], "home-page");
  } else {
    can(["read", "create", "update", "delete"], feature);
  }

  return rules;
};

export const buildAbilityFor = (role: any, feature: any) => {
    return AppAbility(defineRulesFor(role, feature), {
      // @ts-ignore
      detectSubjectType: (object: any) => object.type
    })
}

export const defaultACLObj = {
    action: 'manage',
    feature: 'all'
}

export default defineRulesFor