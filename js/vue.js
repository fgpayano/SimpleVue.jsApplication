new Vue({
    el: '#app',

    data:
    {
        users: [],
        inProgress: false,
        status: {}
    },

    methods:
    {
        show_users: function ()
        {
            this.inProgress = true;

            Vue.http.get('https://jsonplaceholder.typicode.com/users').then((data) => {
                this.users = data.body;
                this.inProgress = false;
            }, (errors) => {
                this.status = errors;
            });
        },

        clear_users: function ()
        {
            this.users = [];
        },

        delete_user: function (index, user)
        {
            if (confirm(`Are you sure want to delete ${user.name}`))
            {
                this.users.splice(index, 1)
            }
        }
    }
});
