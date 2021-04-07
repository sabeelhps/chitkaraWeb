const socket = io();


setTimeout(() => {
    console.log("Connected Successfully");
    console.log(socket.id);
}, 1000)


socket.on('successfull', (data) => {
    console.log(data.msg);
})