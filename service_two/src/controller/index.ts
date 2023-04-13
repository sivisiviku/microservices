import * as Koa from 'koa'
import * as amqp from 'amqplib/callback_api'

const test = async(ctx: Koa.Context) => {
    amqp.connect('amqp://rabbitmq', function(error0, connection) {
    // amqp.connect('amqp://localhost', function(error0, connection) {
        if(error0) {
            throw error0
        }
        connection.createChannel(function(error1, channel) {
            if(error1) {
                throw error1
            }
            let queue = 'task_queue'
            channel.assertQueue(queue, {
                durable: true
            })
            channel.prefetch(1)
            channel.consume(queue, function(message) {
                let secs = Number(message.content.toString())
                console.log(" [x] Received %s", message.content.toString())
                setTimeout(function() {
                    console.log(" [x] Done")
                    channel.ack(message);
                }, secs * 1000)
            }, {
                noAck: false
            })
        })
    })
    ctx.body = 'Message is accepted'
}

export {
    test
}