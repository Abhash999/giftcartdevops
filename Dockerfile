FROM openjdk:8-alpine

RUN apk update
RUN apk add maven
COPY pom.xml /usr/local/giftcartdevops/pom.xml
COPY src /usr/local/giftcartdevops/src
COPY target/giftcartdevops-0.0.1-SNAPSHOT.war /usr/local/giftcartdevops/target/giftcartdevops-0.0.1-SNAPSHOT.war
WORKDIR /usr/local/giftcartdevops
