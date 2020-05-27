FROM openjdk:8-alpine

RUN apk update
RUN apk add maven
COPY target/giftcartdevops-0.0.1-SNAPSHOT.war /usr/local/giftkart/giftcartdevops-0.0.1-SNAPSHOT.war
WORKDIR /usr/local/giftkart
CMD ["java","jar","giftcartdevops-0.0.1-SNAPSHOT.war"]
