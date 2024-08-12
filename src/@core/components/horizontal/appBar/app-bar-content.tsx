import { Box } from "@mui/material";
import ModeToggler from "../../shared/sections/mode-toggler";
import UserDropdown from "../../shared/sections/user-dropdown";
import LanguageDropdown from "../../shared/sections/language-dropdown";
import NotificationDropdown from "../../shared/sections/notification-dropdown";
import { AppBarContentProps } from "@/domains/types/app-bar-content.type";

const AppBarContentHorizontal = (props: AppBarContentProps) => {
  const { settings, saveSettings, children } = props;

  return (
    <Box sx={{ display: "flex", alignItems: "center"}}>
      <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      {/* <ModeToggler settings={settings} saveSettings={saveSettings} />
      <NotificationDropdown settings={settings} />
      <UserDropdown settings={settings} /> */}
    </Box>
  );
};

export default AppBarContentHorizontal