import { createContext, useState, useEffect, ReactNode } from "react"
import themeConfig from "@/infra/configs/themeConfig"
import localStorageData from "../utils/localStorage"

const initialSettings = {
    themeColor: themeConfig.defaultColor,
    mode: themeConfig.mode,
    footer: themeConfig.footer,
    layout: themeConfig.layout,
    lastLayout: themeConfig.layout,
    direction: themeConfig.direction,
    navHidden: themeConfig.navHidden,
    appBarBlur: themeConfig.appBarBlur,
    navCollapsed: themeConfig.navCollapsed,
    contentWidth: themeConfig.contentWidth,
    toastPosition: themeConfig.toastPosition,
    verticalNavToggleType: themeConfig.verticalNavToggleType,
    skin: themeConfig.layout === 'horizontal' && themeConfig.skin === 'semi-dark' ? 'default' : themeConfig.skin,
    appBar: themeConfig.layout === 'horizontal' && themeConfig.appBar === 'hidden' ? 'fixed' : themeConfig.appBar
}

const staticSettings = {
    appBar: initialSettings.appBar,
    footer: initialSettings.footer,
    layout: initialSettings.layout,
    navHidden: initialSettings.navHidden,
    lastLayout: initialSettings.lastLayout,
    toastPosition: initialSettings.toastPosition
}

const restoreSettings = () => {
    let settings = null
    try {
        const storeData = localStorageData.getItem("settings")
        if (storeData) {
            settings = {...JSON.parse(storeData), ...staticSettings}
        } else {
            settings = initialSettings
        }
    } catch (error) {
        console.log(error)
    }

    return settings
}

const storeSettings = (settings: any) => {
    const initSettings = Object.assign({}, settings)
    delete initSettings.appBar
    delete initSettings.footer
    delete initSettings.layout
    delete initSettings.navHidden
    delete initSettings.lastLayout
    delete initSettings.toastPosition
    localStorageData.setItem("settings", JSON.stringify(initSettings))
}

export const SettingsContext = createContext({
    saveSettings: (updatedSettings: any) => Promise.resolve(),
    settings: initialSettings
})

export const SettingsProvider = ({ children, pageSettings }: {pageSettings?: any, children: ReactNode} ) => {
    const [settings, setSettings] = useState({...initialSettings })

    useEffect(() => {
        const restoredSettings = restoreSettings()
        if (restoredSettings) {
            setSettings({...restoredSettings})
        }
        if (pageSettings) {
            setSettings({...settings, ...pageSettings})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSettings])

    useEffect(() => {
        if (settings.layout === 'horizontal' && settings.skin === 'semi-dark') {
            saveSettings({ ...settings, skin: 'default' })
        }
        if (settings.layout === 'horizontal' && settings.appBar === 'hidden') {
            saveSettings({ ...settings, appBar: 'fixed' })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.layout])

    const saveSettings = async (updatedSettings: any) => {
        storeSettings(updatedSettings)
        setSettings(updatedSettings)
    }

    return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer 