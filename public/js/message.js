var socket = io();

        new Vue({
            el: '.chat',
            data: {
                message: '',
                messages: []
            },
            methods: {
                send: function(e) {
                    if(e.keyCode !== 13) {
                        return;
                    }

                    //send
                    socket.emit('message.sent', this.message);
                    
                    this.message = '';
                },

                ready: function() {
                    socket.on('message', function (message) {
                        this.messages.push(message);
                    }.bind(this));
                }
            },
            beforeMount() {
                this.ready();
            }
        });