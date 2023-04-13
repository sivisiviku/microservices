.PHONY : build run-docker clean

build:
	docker build -t service-three .

run-docker:
	docker run -d --rm --name service-three \
	--network=kong-net \
	-p 3002:3002 \
	service-three

clean:
	docker rmi -f service-three