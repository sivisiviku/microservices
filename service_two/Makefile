.PHONY : build run-docker clean

build:
	docker build -t service-two .

run-docker:
	docker run -d --rm --name service-two \
	--network=kong-net \
	-p 3001:3001 \
	service-two

clean:
	docker rmi -f service-two