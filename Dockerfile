FROM tomcat:8.0

RUN apt update
COPY target/giftcartdevops-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/target/giftcartdevops-0.0.1-SNAPSHOT.war
