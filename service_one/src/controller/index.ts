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
            let message = ctx.params.size || "1";
            channel.assertQueue(queue, {
                durable: true
            })
            channel.sendToQueue(queue, Buffer.from(message), {
                persistent: true
            })
        })
        setTimeout(function() {
            connection.close()
        }, 500)
    })
    ctx.body = 'Service one has sent a message'
}

export {
    test
}