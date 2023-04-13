#!/bin/bash

docker run -it --rm --name rabbitmq \
--network=kong-net \
-p 5673:5672 \
-p 15672:15672 \
rabbitmq:3.11-management