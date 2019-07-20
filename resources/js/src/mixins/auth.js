export default {
    methods: {
        /**
         * Check if the authenticated user can perform an action.
         *
         * @param permission
         * @returns {boolean}
         */
        can(permission) {
            let hasPermission = false;
            store.state.userPermissions.forEach((userPermission) => {
                if(userPermission.name == permission){
                    hasPermission = true;
                }
            });

            return hasPermission;
        }
    },
}