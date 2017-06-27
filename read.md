npm install -- To install all the dependencies 

node server.js to start the server

To use in webpack server 


    devServer: {
        port: 8080,
        stats: 'errors-only',
        proxy: {
            '/api': {
                target: 'http://localhost:20404/',
                secure: true
            }
        }
    },