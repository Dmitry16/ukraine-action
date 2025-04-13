import { VerticalUI } from "./types"

const ToolbarLeftWidget = {
    id: "ToolbarLeftWidget1",
    isEnabled: true,
    components: [
        { id: "CustomerSelectionId", name: "CustomerSelection"},
        { id: "LocationSelectionId", name: "LocationSelection"},
        { id: "FloorSelectionId", name: "FloorSelection"},
        { id: "RoleSelectionId", name: "RoleSelection"},
    ]
}

const ToolbarRightWidget = {
    id: "ToolbarRightWidget1",
    isEnabled: true,
    components: [
        { id: "FirebaseMessagingId", name: "FirebaseMessaging"},
        { id: "FirebaseNotificationId", name: "FirebaseNotification"},
        { id: "QuickUserToggleId", name: "QuickUserToggle"},
        { id: "SignOutId", name: "SignOut"},
    ]
}

export const defaultConfig = {
    dashboard: {
        header: {
            headerToolbarFeature: { ToolbarLeftWidget, ToolbarRightWidget},
        },
        body: {
            topRowInfoFeature: {
                Widget1: { id: "widget6", widget: "Widget1", isEnabled: true, components: [] },
                Widget2: { id: "widget4", widget: "Widget2", isEnabled: true, components: [] },
                Widget3: { id: "widget5", widget: "Widget3", isEnabled: true, components: [] },
                Widget4: { id: "widget4", widget: "Widget4", isEnabled: true, components: [] },
                Widget5: { id: "widget5", widget: "Widget5", isEnabled: true, components: [] },
                Widget6: { id: "widget6", widget: "Widget6", isEnabled: true, components: [] }
            },
            generalAttendanceFeature: {
                UserInfoWidget: {
                    id: "widget1",
                    isEnabled: true,
                    components: [
                        { id: "componentId", name: "InfoPopupPeopleAndAssets" },
                    ]
                },
                // GeneralAttendanceTableWidget: {
                //     id: "widget1",
                //     isEnabled: true,
                //     components: [
                //         { id: "GeneralAttendanceTableId", name: "GeneralAttendanceTable" },
                //     ]
                // },
                SampleWidget2: { id: "widget1", widget: "SampleWidget2", isEnabled: true, components: [] }
            },
            liveMap: {
                LiveMapWidget: { id: "widget1", widget: "LiveMapWidget", isEnabled: true, components: [] }
            }
        },
        footer: {
            footerFeature: {
                FooterWidget: { id: "widget1", widget: "FooterWidget", isEnabled: true, components: [] }
            }
        }
    },
    reporting: {},
    auditTool: {},
    communication: {},
    admin: {},
    operations: {}

} as const satisfies VerticalUI
