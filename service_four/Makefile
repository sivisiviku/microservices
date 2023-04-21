.PHONY : build run-docker clean

build:
	docker build -t service-four .

run-docker:
	docker run -d --rm --name service-four \
	--network=kong-net \
	-p 3003:3003 \
	service-four

clean:
	docker rmi -f service-four