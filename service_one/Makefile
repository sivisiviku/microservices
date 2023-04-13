.PHONY : build run-docker clean

build:
	docker build -t service-one .

run-docker:
	docker run -d --rm --name service-one \
	--network=kong-net \
	-p 3000:3000 \
	service-one

clean:
	docker rmi -f service-one