import { ENABLE_SETTINGS, DISABLE_SETTINGS, TOGGLE_WIDGET, OPEN_WIDGET, CLOSE_WIDGET, SHOW_SETTINGS, HIDE_SETTINGS, SHOW_SETTINGS_NOTIFICATION, HIDE_SETTINGS_NOTIFICATION } from '../actions/app-state-actions';

const INITIAL_STATE = {
    settingsVisible: false,
    settingsNotificationVisible: false,
    widgetOpened: false,
    settingsEnabled: false
};

export function AppStateReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ENABLE_SETTINGS:
            return Object.assign({}, state, {
                settingsEnabled: true
            })
        case DISABLE_SETTINGS:
            return Object.assign({}, state, {
                settingsEnabled: false
            })

        case TOGGLE_WIDGET:
            return Object.assign({}, state, {
                widgetOpened: !state.widgetOpened
            });

        case OPEN_WIDGET:
            return Object.assign({}, state, {
                widgetOpened: true
            });
        case CLOSE_WIDGET:
            return Object.assign({}, state, {
                widgetOpened: false
            });
        case SHOW_SETTINGS:
            return Object.assign({}, state, {
                settingsVisible: true
            });
        case HIDE_SETTINGS:
            return Object.assign({}, state, {
                settingsVisible: false
            });
        case SHOW_SETTINGS_NOTIFICATION:
            return Object.assign({}, state, {
                settingsNotificationVisible: true
            });
        case HIDE_SETTINGS_NOTIFICATION:
            return Object.assign({}, state, {
                settingsNotificationVisible: false
            });
        default:
            return state;
    }
}
