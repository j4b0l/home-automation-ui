define([], function () {
    'use strict';

    return {
        activeNodeTreeId: 1,
        activeNodeTreeStatus: 'normal', // update, add, remove
        activeNodeTreeIdHistory: 1,
        backButtonEnabled: false,
        adding: false,
        editing: false,
        duplicating: false,
        searchString: '',
        searchStringLeftPanel: '',
        leftPanelItems: '',
        itemBindingTemp: {},
        leftPanelItemSelectedId: null,
        defaultProfileId: localStorage.getItem('defaultProfileId'),
        tree: {
            id: 1,
            options: {
                name: 'preferences',
                leftPanel: false,
                searchPanel: false,
                componentName: 'main_menu',
                noRequiredModel: true
            },
            children: [
                {
                    id: 2,
                    options: {
                        name: 'profiles',
                        leftPanel: true,
                        searchPanel: true,
                        buttons: ['add', 'remove'],
                        componentName: '_profile',
                        serviceId: 'profiles'
                    },
                    children: []
                },
                {
                    id: 3,
                    options: {
                        name: 'rooms',
                        leftPanel: true,
                        searchPanel: true,
                        buttons: ['add', 'remove'],
                        componentName: '_room',
                        serviceId: 'locations'
                    },
                    children: []
                },
                {
                    id: 4,
                    options: {
                        name: 'widgets',
                        leftPanel: true,
                        searchPanel: true,
                        componentName: '_widget',
                        serviceId: 'devices'
                    },
                    children: []
                },
                {
                    id: 5,
                    options: {
                        name: 'automation',
                        leftPanel: false,
                        searchPanel: false,
                        componentName: 'instances_menu',
                        serviceId: 'instances',
                        noRequiredModel: true
                    },
                    children: []
                },
                {
                    id: 6,
                    options: {
                        name: 'modules',
                        leftPanel: false,
                        searchPanel: false,
                        componentName: 'modules_menu',
                        serviceId: 'modules',
                        noRequiredModel: true
                    },
                    children: []
                },

                {
                    id: 7,
                    options: {
                        name: 'ui_setting',
                        leftPanel: false,
                        searchPanel: false,
                        componentName: 'interface_menu',
                        serviceId: null,
                        noRequiredModel: true
                    },
                    children: []
                }
            ]
        }
    };
});

